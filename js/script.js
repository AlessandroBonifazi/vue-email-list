// Debug
console.log('JS OK!');

// Config
const app = new Vue({
    el: '#root',
    data: {
        emails: [],
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                const email = response.data;
                this.emails.push(email.response)
            });
        }
    },
    methods: {

    },
})
