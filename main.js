var app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    appLoaded: false,
    message: this.$version,
    player: null,
    loaded: false,
    showModal: false,
    valid: true,
    acting: false,
    assetsList: assetsList,
    interval: null,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    ageRules: [
      v => !!parseInt(v) || 'Age is required',
      v => (parseInt(v) >= 18) || 'The Player must be at least 18 years old',
    ],
  },
  metaInfo() {
    return {
      title: `Game v${this.$version}`,
    }
  },
  mounted() {
    this.load();
  },
  computed: {
    inventoryItems() {
      return this.player.assets.filter(i => i !== null);
    },
    getPlayerAttribsName() {
      const header = [];
      header.push(...Object.keys(this.player.needs));
      return header;
    },
    getPlayerAttribs() {
      const values = [];
      values.push(...Object.values(this.player.needs).map(v => `${v.value}/${v.cap}`));
      return values;
    }
  },
  methods: {
    load() {
      this.player = new Player;

      if (existingPlayer.get()) {
        const parsed = JSON.parse(existingPlayer.get());

        Object.entries(parsed).forEach(([key, value]) => {
          this.player[key] = value;
        });
        this.loaded = true;
        this.time();
      } else {
        this.showModal = true;
      }
      this.appLoaded = true;
    },
    validate () {
      const validate = this.$refs.form.validate();

      if (validate) {
        this.showModal = false;        
        this.save();
        this.time();
        this.loaded = true;
      }
    },
    getValue(value) {
      if (value.hasOwnProperty('value')) {
        return `${value.value}/${value.cap}`;
      }
      return value;
    },
    time() {
      this.interval = setInterval(() => {
        Promise.all([
          this.player.time()
        ])
        .then(() => {
          this.save();
        })
      }, 2000);
    },
    save() {
      existingPlayer.set(JSON.stringify(this.player));
    },
    piss() {
      this.player.piss();
    },
    consume(asset) {
      this.acting = true;
      setTimeout(() => {
        Object.entries(asset.modifiers).forEach(([key, value]) => {
          if (this.player.__proto__[key]) {
            this.player[key](value);
          }
        })
        this.player.remove(asset.id);
        this.acting = false;
      }, 3000);
    },
    work() {
      this.acting = true;
      setTimeout(() => {
        this.player.work();
        this.acting = false;
      }, 5000);
    },
    reset() {
      clearInterval(this.interval);
      existingPlayer.remove();
      this.loaded = false;
      this.load();
    }
  }
})