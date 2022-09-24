/*
window.onload = function startScript(){
    renderAnimate3D();
}









function renderAnimate3D() {

    //inputDate
    let width = window.innerWidth,
        height = window.innerHeight,
        renderScrin = document.querySelector('.scene');
    let house;

    //renderScrinSizes
    renderScrin.setAttribute('width', width);
    renderScrin.setAttribute('height', height);

    //renderer
    let renderer = new THREE.WebGLRenderer({canvas: renderScrin});
    renderer.setClearColor(0x333333);

    //создане сцены
    let scene = new THREE.Scene();

    //создание камеры
    let camera = new THREE.PerspectiveCamera(45 , width / height , 0.1 , 5000);// угол обзора , пропорция отображения , минимальное отображение объекта , максимальное отображение объекта

    //создание источников освещения
    let light = new THREE.AmbientLight(0xffffff, 1);
    // добавление света на сцену
    scene.add(light);

    //const lightdot = new THREE.DirectionalLight(0xffffff, 2); // 2
    //lightdot.position.set(50, 50, 100); // 50 50 100
    //scene.add(lightdot);



    //настройка камеры (x, y, z)
    camera.position.set(0, 0, 1);


    // инициализация 3д модели GLTFloadera
    let loader = new THREE.GLTFLoader();

    let mixer;

    loader.load("./house/homeScene.gltf", function(gltf) {
        scene.add(gltf.scene);
        house = gltf.scene.children[0];

        //запуск движения Mesh
        mixer = new THREE.AnimationMixer(house);
        const clips = gltf.animations;
        clips.forEach(function (clip){
            const action = mixer.clipAction(clip);
            //action.play();
        })
        //рекурсия анимационного цикла
        loop();
    });


    //настройка OrbitControls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);



    //глобальное время для движения Mesh
    const clock = new THREE.Clock();


    // старт отрисовки
    function loop(){
        //апуск анимационного движения mesh
        if(mixer) mixer.update(clock.getDelta());
        house.position.y = -0.08;


        renderer.render(scene, camera);
        requestAnimationFrame(function (){loop();})
    }

}*/
