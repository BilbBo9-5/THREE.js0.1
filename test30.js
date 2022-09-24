
window.onload = function startScript(){
    renderAnimate3D();
}
function renderAnimate3D() {
    //Variables for setup
    let renderScrin;
    let camera;
    let renderer;
    let scene;
    let house;

    function init() {
        renderScrin = document.querySelector('.scene');
        //создане сцены
        scene = new THREE.Scene();
        //constList настройка камеры
        const fov = 45;
        const aspect = renderScrin.clientWidth / renderScrin.clientHeight;
        const near = 0.01;
        const far = 5000; //5000
        //Camera setup
        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        //настройка камеры (x, y, z)
        camera.position.set(0, 0, 1);


        //создание источников освещения
        let light = new THREE.AmbientLight(0x404040, 0.3);
        // добавление света на сцену
        scene.add(light);
        const lightdot = new THREE.DirectionalLight(0xffffff, 0.6); // 2
        const lightdot2 = new THREE.DirectionalLight(0xffffff, 0.6); // 2
        const lightdot3 = new THREE.DirectionalLight(0xffffff, 0.6); // 2
        const lightdot4 = new THREE.DirectionalLight(0xffffff, 0.6); // 2
        lightdot.position.set(1, 1, 1); // 50 50 100
        lightdot2.position.set(-1, 1, 1); // 50 50 100
        lightdot3.position.set(0, 0.5, -1); // 50 50 100
        lightdot4.position.set(0, -1, 0); // 50 50 100
        scene.add(lightdot, lightdot2, lightdot3, lightdot4);

        //Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(renderScrin.clientWidth, renderScrin.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        //renderer.setClearColor(0x333333);
        // add elem
        renderScrin.appendChild(renderer.domElement);
        //настройка OrbitControls
        let controls = new THREE.OrbitControls(camera, renderer.domElement);
        //controls.rotateSpeed = 0.3;
        //controls.update();
        //console.log(controls);

        // инициализация 3д модели GLTFloadera
        let loader = new THREE.GLTFLoader();
        let mixer;
        loader.load("./house/scene.gltf", function(gltf) {
            console.log(gltf.scene);
            scene.add(gltf.scene);
            house = gltf.scene.children[0];

            //запуск движения Mesh
            mixer = new THREE.AnimationMixer(house);
            const clips = gltf.animations;
            clips.forEach(function (clip){
                const action = mixer.clipAction(clip);
                action.play();
            })
            //рекурсия анимационного цикла
            loop();
        });
        //глобальное время для движения Mesh
        const clock = new THREE.Clock();
        // старт отрисовки
        function loop(){
            //апуск анимационного движения mesh
            if(mixer) mixer.update(clock.getDelta());
            //house.position.y = -0.08;
            renderer.render(scene, camera);
            requestAnimationFrame(function (){loop();})
        }
    }
    init();
    function onWindowResize() {
        camera.aspect = renderScrin.clientWidth / renderScrin.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(renderScrin.clientWidth, renderScrin.clientHeight);
    }
    window.addEventListener("resize", onWindowResize);
}



