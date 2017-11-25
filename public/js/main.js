var myRouter = new VueRouter({
    routes: [
        {
            // at what URL is this component active?
            path: '/', // localhost:8080/#
            component : {
                template: `<h1 class="text-center">Random Image Gallery.</h1>`,
                created: function(){ console.log('created the main component')},
                destroyed: function(){ console.log('destroyed the main component')}
            }
        },
        {
            path: '/about', // localhost:8080/#/about
            //because the template is on the server, we must send a get request to retrieve it
            // since the AJAX request is async, we can't return the component, because we don't know when we have access to it.
            // instead, we RESOLVE the component in the $.get callback
            component: function(resolve, reject){
                $.get('/about.html', function(htmlFromServer){
                    var newComponent = {
                        template: htmlFromServer,
                        created: function(){ console.log('created the about component')},
                        destroyed: function(){ console.log('destroyed the about component')}
                    }
                    resolve(newComponent)
                })
            }
        },
        {
            // /images/abstract
            // /images/business
            // /images/cats
            path: '/images/:category',

            component: {
                template: `
                    <div>
                        <h1>{{$route.params.category}}</h1>
                        <img v-bind:src="imageUrl">
                    </div>
                `,
                computed: {
                    // we put the imageUrl in the computed section because we want this value to update any time the route parameters change
                    imageUrl: function(){
                        return `http://lorempixel.com/400/400/${this.$route.params.category}`
                    }
                },
                // if we move back and forth between two routes that use the same component, Vue won't destroy and create it. Only the URL changes. It's a good thing we're computing a property based on $route.params, so we can see when the URL changes. 
                created: function(){ console.log('created the images component')},
                destroyed: function(){ console.log('destroyed the images component')},
            },

        },
    ]
})


var mainVm = new Vue({
    el: '#app',
    router: myRouter,
    data: {

    }
})