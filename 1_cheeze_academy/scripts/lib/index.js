

	var container;
	var stats;
	var camera;
	var scene;
	var renderer;
	var group;
	var particle;
	var mouseX = 0;
	var mouseY = 0;
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	var text;
	var loader;

	var req;

	var mouse = new THREE.Vector2(-2, -2);

	init();
	animate();

	function init(){

		// add dom
		container = document.createElement('div');
		document.body.appendChild(container);


		// camera
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
		camera.position.z = 1000;

		// scene
		scene = new THREE.Scene();



		// mesh material
		var PI2 = Math.PI * 2;
		var program = function(context){
			context.beginPath();
			context.arc(0, 0, 0.5, 0, Math.PI * 2, true);
			context.fill();
		};

		// group
		group = new THREE.Group();
		scene.add(group);

		for(var i = 0; i < 1000; i++){

			var opa = Math.random();

			var material = new THREE.SpriteCanvasMaterial({
				color : Math.random() * 0x808008 + 0x808080,
				transparent : true,
				blending: THREE.AdditiveBlending,
				opacity : opa,
				program : program
			});

			

			// particle
			particle = new THREE.Sprite( material );
			particle.position.x = Math.random() * 2000 - 1000;
			particle.position.y = Math.random() * 2000 - 1000;
			particle.position.z = Math.random() * 2000 - 1000;
			particle.scale.x = particle.scale.y = Math.random() * 80 + 10;
			group.add(particle);

		}

		// loader(font)
		loader = new THREE.FontLoader();
		loader.load('scripts/lib/helvetiker_regular.typeface.json',function(font){
			createText(font);
		});

		function createText(font){
			var word = 'CHEEZE ACADEMY TOKYO'
			text = new THREE.Mesh(
				new THREE.TextGeometry(word,{
					font : font,
					size : 100,
					height : 20,
					curveSegments : 6
				}),
				new THREE.MeshBasicMaterial({
					color : 0xFFFF00,
					side : THREE.DoubleSide
				})
			);
			text.position.set(-800 , -120, 100);
			
			scene.add(text);
		}

		// picking

		document.addEventListener('click',function(e){

			var rect = e.target.getBoundingClientRect();
			mouse.x = (e.clientX - rect.left) / window.innerWidth * 2 -1;
			mouse.y = (e.clientY - rect.top) / window.innerHeight * -1 * 2 + 1;

			// var wrap = document.getElementById('wrapper');
			// wrap.classList.add("test")






		});

		// renderer
		renderer = new THREE.CanvasRenderer();
		renderer.setPixelRatio( window.devicePixelRatio);
		renderer.setSize(window.innerWidth,window.innerHeight);

		container.appendChild(renderer.domElement);
		// stats = new Stats();
		// container.appendChild(stats.dom);

		// event

		document.addEventListener('mousemove', onDocumentMouseMove, false);
		document.addEventListener('touchstart', onDocumentTouchStart, false);
		document.addEventListener('touchmove', onDocumentTouchMove, false);

		window.addEventListener('resize', onWindowResize, false);

	}

	function onWindowResize(){
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function onDocumentMouseMove(event){
		mouseX = event.clientX - windowHalfX;
		mouseY = event.clientY - windowHalfY;
	}

	function onDocumentTouchStart(event){
		if(event.touches.length === 1){
			event.preventDefault();
			mouseX = event.touches[0].pageX - windowHalfX;
			mouseY = event.touches[0].pageY - windowHalfY;
		}
	}

	function onDocumentTouchMove(event){
		if(event.touches.length === 1){
			event.preventDefault();
			mouseX = event.touches[0].pageX - windowHalfX;
			mouseY = event.touches[0].pageY - windowHalfY;
		}
	}

	function animate(){
		req = requestAnimationFrame(animate);
		render();
		// stats.update();

	}



	function render(){


		camera.position.x += (mouseX - camera.position.x) * 0.05;
		camera.position.y += (-mouseY - camera.position.y) * 0.05;
		camera.lookAt(scene.position);

		group.rotation.x += 0.006;
		group.rotation.y += 0.01;
		renderer.render(scene, camera);

	}


