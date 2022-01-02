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
    this.player = new Player;
    if (existingPlayer) {
      const parsed = JSON.parse(existingPlayer);

      Object.entries(parsed).forEach(([key, value]) => {
        this.player[key] = value;
      });
      this.loaded = true;
    } else {
      this.showModal = true;
    }
    this.appLoaded = true;

    console.log(this.player);

    this.time();
  },
  methods: {
    validate () {
      const validate = this.$refs.form.validate();

      if (validate) {
        this.showModal = false;        
        this.save();
        this.loaded = true;
      }
    },
    time() {
      setInterval(() => {
        this.player.getHungry();
        // this.player.thirst = this.player.thirst - 1;
        // this.player.bladder = this.player.bladder - 3;
        // this.player.social = this.player.social - .5;
        // this.player.rest = this.player.rest - 3;
      }, 3000);
    },
    save() {
      localStorage.setItem('player', JSON.stringify(this.player));
    },
    eat() {
      console.log('eat');
      this.acting = true;
      
      this.player.eat();
      
      this.acting = false;
    }
  }
})