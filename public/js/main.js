var myRouter = new VueRouter({
    routes: [
        {
            path: '/',
            component : {
                template: `<div id="main-container">
                <div id="initial-content">
                    <div class="container-fluid" >
                        <div class="row">
                            <div class="col-4"></div>
                                <div class="col-4" >
                                    <span id="the-emoticon" class="ec ec-blush"></span>
                                    <h1>Hello</h1> 
                                    <div id="im-eric"><br>I'm Eric.</div>
                                    <p>I am a full-stack web developer with a background sales, project managment, and computer hardware.</p>   
                                </div>
                            <div class="col-4"></div>
                        </div>
                    </div>
                </div>
                <div class="scroll-container">

                </div>
                <div class="projects">
                    
                </div>
                <div id="project box">
                    
                </div>
            </div>`,
                created: function(){ console.log('created the main component')},
                destroyed: function(){ console.log('destroyed the main component')}
            }
        },
    ]
})


var mainVm = new Vue({
    el: '#app',
    router: myRouter,
    data: {

    }
})