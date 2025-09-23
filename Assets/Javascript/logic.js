
// Menu Mobile Toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

// Logo Click Handler - Redirect to Home
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
        // Add cursor pointer style via JavaScript to avoid CSS changes
        logo.style.cursor = 'pointer';
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

// Profession Transformation Content
const professionData = {
    programmer: {
        title: "Engenheiro de Software",
        content: `
            <p>A Inteligência Artificial está revolucionando a área de desenvolvimento de software de diversas formas:</p>
            <ul>
                <li>Ferramentas de autocompletar código inteligente (como GitHub Copilot e Amazon CodeWhisperer)</li>
                <li>Debugagem automática e sugestões de correção em tempo real</li>
                <li>Geração automática de código a partir de descrições em linguagem natural</li>
                <li>Otimização automática de algoritmos e identificação de gargalos de performance</li>
                <li>Detecção proativa de vulnerabilidades de segurança e sugestões de remediação</li>
            </ul>
            <p>Isso não substitui os engenheiros de software, mas aumenta significativamente sua produtividade e permite focar em problemas mais complexos e estratégicos.</p>
        `
    },
    designer: {
        title: "Designer de Produto",
        content: `
            <p>O design de produto está passando por uma transformação radical com a adoção de IA:</p>
            <ul>
                <li>Ferramentas de geração de designs a partir de briefings textuais e requisitos de usuário</li>
                <li>Sistemas de sugestão de paletas de cores, tipografia e layouts baseados em princípios de design</li>
                <li>Testes A/B automatizados e otimização de interfaces baseada em dados comportamentais</li>
                <li>Personalização em massa de experiências para diferentes segmentos de usuários</li>
                <li>Automação de tarefas repetitivas como criação de variações e adaptação responsiva</li>
            </ul>
            <p>Os designers agora podem focar mais na estratégia, pesquisa de usuário e inovação, enquanto a IA cuida de execuções operacionais.</p>
        `
    },
    doctor: {
        title: "Especialista em Saúde",
        content: `
            <p>A área da saúde está sendo transformada pela IA de maneiras impressionantes:</p>
            <ul>
                <li>Diagnóstico por imagem assistido por IA com precisão superior à média humana</li>
                <li>Análise de prontuários eletrônicos para identificar padrões e sugerir protocolos de tratamento</li>
                <li>Cirurgias robóticas com precisão microscópica e menor invasividade</li>
                <li>Medicina personalizada baseada em análise genética e dados biométricos</li>
                <li>Monitoramento contínuo de pacientes através de wearables e alertas preditivos</li>
            </ul>
            <p>Os profissionais de saúde estão se tornando mais eficazes com o auxílio da IA, podendo oferecer diagnósticos mais precisos e tratamentos mais personalizados.</p>
        `
    },
    engineer: {
        title: "Engenheiro de Sistemas",
        content: `
            <p>A engenharia de sistemas está evoluindo rapidamente com a integração de IA:</p>
            <ul>
                <li>Projeto generativo que cria milhares de opções de design otimizadas para requisitos específicos</li>
                <li>Simulações complexas que antecipam falhas e problemas antes da implementação física</li>
                <li>Manutenção preditiva de máquinas e infraestrutura com base em análise de dados em tempo real</li>
                <li>Automação de processos de engenharia com restrições complexas e múltiplas variáveis</li>
                <li>Gestão inteligente de projetos com alocação dinâmica de recursos e previsão de riscos</li>
            </ul>
            <p>Engenheiros podem agora resolver problemas mais complexos e criar sistemas mais eficientes e resilientes com o auxílio de sistemas de IA.</p>
        `
    },
    psychologist: {
        title: "Psicólogo / Terapeuta",
        content: `
            <p>A IA oferece novas ferramentas de apoio para a saúde mental:</p>
            <ul>
                <li>Chatbots terapêuticos para suporte emocional inicial e acompanhamento entre sessões.</li>
                <li>Análise de padrões de fala e texto para identificar sinais precoces de depressão ou ansiedade.</li>
                <li>Plataformas de terapia virtual que personalizam exercícios e conteúdos para o paciente.</li>
                <li>Realidade Virtual para terapia de exposição em um ambiente controlado e seguro.</li>
            </ul>
            <p>A IA atua como uma ferramenta de suporte, permitindo que terapeutas monitorem o progresso e ofereçam um cuidado mais contínuo e personalizado.</p>
        `
    },
    educator: {
        title: "Professor / Educador",
        content: `
            <p>A educação está sendo personalizada e otimizada com o poder da IA:</p>
            <ul>
                <li>Criação de planos de aula e materiais didáticos personalizados para o ritmo de cada aluno.</li>
                <li>Tutores virtuais disponíveis 24/7 para tirar dúvidas e reforçar o aprendizado.</li>
                <li>Sistemas de ensino adaptativo que ajustam a dificuldade das atividades em tempo real.</li>
                <li>Automação da correção de provas e trabalhos, liberando tempo para o professor focar na didática.</li>
            </ul>
            <p>Educadores podem usar a IA para criar experiências de aprendizado mais eficazes e inclusivas, atendendo às necessidades individuais de cada estudante.</p>
        `
    },
    robotics: {
        title: "Especialista em Robótica",
        content: `
            <p>A IA é o cérebro por trás da nova geração de robôs inteligentes:</p>
            <ul>
                <li>Desenvolvimento de robôs autônomos capazes de navegar e tomar decisões em ambientes complexos.</li>
                <li>Otimização de processos industriais com robôs que aprendem e se adaptam à produção.</li>
                <li>Integração de visão computacional e sensores para tarefas de alta precisão.</li>
                <li>Robôs colaborativos (cobots) que trabalham de forma segura ao lado de humanos.</li>
            </ul>
            <p>O especialista em robótica com conhecimento em IA é crucial para projetar os sistemas autônomos que estão moldando a indústria, a saúde e a logística.</p>
        `
    },
    data_scientist: {
        title: "Cientista de Dados",
        content: `
            <p>A IA potencializa o trabalho do Cientista de Dados, automatizando e aprimorando a análise:</p>
            <ul>
                <li>Automação da limpeza e preparação de grandes volumes de dados (Big Data).</li>
                <li>Uso de AutoML para testar e otimizar centenas de modelos de machine learning rapidamente.</li>
                <li>Criação de modelos preditivos mais complexos e precisos para prever tendências de mercado.</li>
                <li>Análise de dados não estruturados, como textos e imagens, para extrair insights valiosos.</li>
            </ul>
            <p>Com a IA, o cientista de dados pode focar na interpretação dos resultados e na geração de valor estratégico para o negócio, em vez de tarefas repetitivas.</p>
        `
    },
    agronomo: {
        title: "Agrônomo",
        content: `
            <p>A IA está revolucionando a agricultura moderna, tornando-a mais eficiente e sustentável:</p>
            <ul>
                <li>Agricultura de precisão com drones e sensores IoT para monitoramento de culturas em tempo real.</li>
                <li>Análise preditiva de condições climáticas e otimização de irrigação baseada em dados meteorológicos.</li>
                <li>Detecção precoce de pragas e doenças através de visão computacional e análise de imagens.</li>
                <li>Otimização do uso de fertilizantes e pesticidas com base em análise de solo e necessidades específicas das plantas.</li>
                <li>Robôs agrícolas autônomos para plantio, colheita e manutenção de culturas.</li>
            </ul>
            <p>Os agrônomos agora podem tomar decisões mais precisas e sustentáveis, aumentando a produtividade enquanto reduzem o impacto ambiental.</p>
        `
    },
    lawyer: {
        title: "Advogado",
        content: `
            <p>A IA está transformando a prática jurídica, tornando-a mais eficiente e acessível:</p>
            <ul>
                <li>Análise automatizada de contratos e documentos legais para identificar cláusulas e riscos.</li>
                <li>Pesquisa jurisprudencial inteligente que encontra precedentes relevantes em segundos.</li>
                <li>Automação de tarefas repetitivas como elaboração de petições e documentos padronizados.</li>
                <li>Análise preditiva de resultados de processos judiciais baseada em dados históricos.</li>
                <li>Chatbots jurídicos para consultas iniciais e orientação legal básica.</li>
            </ul>
            <p>Os advogados podem focar mais na estratégia jurídica e no relacionamento com clientes, enquanto a IA cuida das tarefas operacionais.</p>
        `
    }
};

// Set up event listeners for profession buttons
document.querySelectorAll('.profession-btn, .career-content .btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Se o href aponta para uma página externa (não é uma âncora), permite navegação normal
        if (href && !href.startsWith('#')) {
            return; // Permite o comportamento padrão do link
        }
        
        e.preventDefault();
        const profession = this.getAttribute('data-profession');
        
        // Update buttons state
        document.querySelectorAll('.profession-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (this.classList.contains('profession-btn')) {
            this.classList.add('active');
        } else {
            // If clicked on card button, also activate corresponding tab
            document.querySelector(`.profession-btn[data-profession="${profession}"]`).classList.add('active');
        }
        
        // Update content
        document.getElementById('profession-title').textContent = professionData[profession].title;
        document.getElementById('profession-content').innerHTML = professionData[profession].content;
        
        // Add animation to content
        const content = document.querySelector('.transformation-content');
        content.style.opacity = 0;
        setTimeout(() => {
            content.style.transition = 'opacity 0.5s ease';
            content.style.opacity = 1;
        }, 50);
        
        // Scroll to interactive section if coming from a card
        if (!this.classList.contains('profession-btn')) {
            window.scrollTo({
                top: document.getElementById('interactive').offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize Three.js for Hero Section
document.addEventListener('DOMContentLoaded', function() {
    // Initialize footer animation
    initFooterAnimation();
    
    // Set up Three.js scene for hero background
    const canvas = document.getElementById('hero-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Optimize for mobile
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows optimized for mobile
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.outputEncoding = THREE.sRGBEncoding;
    
    // Create procedural HDRI environment
    function createProceduralHDRI() {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');
        
        // Create gradient sky
        const gradient = context.createLinearGradient(0, 0, 0, size);
        gradient.addColorStop(0, '#87CEEB'); // Sky blue
        gradient.addColorStop(0.3, '#4682B4'); // Steel blue
        gradient.addColorStop(0.7, '#2F4F4F'); // Dark slate gray
        gradient.addColorStop(1, '#191970'); // Midnight blue
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, size, size);
        
        // Add some procedural clouds/noise
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * size;
            const y = Math.random() * size * 0.6; // Upper part of sky
            const radius = Math.random() * 30 + 10;
            const opacity = Math.random() * 0.3 + 0.1;
            
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            context.fill();
        }
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.mapping = THREE.EquirectangularReflectionMapping;
        return texture;
    }
    
    const envTexture = createProceduralHDRI();
    scene.environment = envTexture;
    scene.background = envTexture;
    
    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024; // Optimized for mobile
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    scene.add(directionalLight);
    
    // Create floating particles with PBR materials
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = window.innerWidth < 768 ? 800 : 1500; // Optimize for mobile
    
    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);
    
    for(let i = 0; i < particleCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 8;
        posArray[i + 1] = (Math.random() - 0.5) * 8;
        posArray[i + 2] = (Math.random() - 0.5) * 8;
        scaleArray[i/3] = Math.random() * 0.3 + 0.1;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Enhanced PBR shader material for particles with bloom effect
    const particlesMaterial = new THREE.ShaderMaterial({
        vertexShader: `
            attribute float scale;
            uniform float time;
            varying vec3 vPosition;
            varying vec3 vNormal;
            
            void main() {
                vec3 pos = position;
                pos.y += sin(time * 0.5 + position.x * 2.0) * 0.1;
                pos.x += cos(time * 0.3 + position.z * 1.5) * 0.05;
                
                vPosition = pos;
                vNormal = normalize(normalMatrix * normal);
                
                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                gl_PointSize = scale * (200.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            uniform float time;
            uniform vec3 customCameraPosition;
            varying vec3 vPosition;
            varying vec3 vNormal;
            
            void main() {
                float dist = length(gl_PointCoord - vec2(0.5, 0.5));
                if (dist > 0.5) discard;
                
                // PBR-like lighting calculation
                vec3 normal = normalize(vNormal);
                vec3 viewDir = normalize(customCameraPosition - vPosition);
                vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
                
                float NdotL = max(dot(normal, lightDir), 0.0);
                float NdotV = max(dot(normal, viewDir), 0.0);
                
                // Fresnel effect
                float fresnel = pow(1.0 - NdotV, 2.0);
                
                float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
                alpha *= (0.5 + 0.5 * NdotL + 0.3 * fresnel);
                
                // Enhanced color with metallic look and bloom
                vec3 baseColor = vec3(0.23, 0.51, 0.98);
                vec3 metallicColor = mix(baseColor, vec3(0.8, 0.9, 1.0), fresnel * 0.5);
                
                // Add bloom-like glow effect
                float glow = 1.0 - smoothstep(0.0, 0.4, dist);
                metallicColor += vec3(0.2, 0.4, 0.8) * glow * 0.5;
                
                gl_FragColor = vec4(metallicColor, alpha * 0.8);
                if (alpha < 0.1) discard;
            }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
            time: { value: 0 },
            customCameraPosition: { value: camera.position }
        }
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesMesh.castShadow = true;
    scene.add(particlesMesh);
    
    // Create geometric objects with PBR materials
    const geometries = [
        new THREE.IcosahedronGeometry(0.3, 1),
        new THREE.OctahedronGeometry(0.25),
        new THREE.TetrahedronGeometry(0.35)
    ];
    
    const pbrObjects = [];
    
    for (let i = 0; i < 15; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6),
            metalness: 0.7 + Math.random() * 0.3, // High metalness for realistic look
            roughness: 0.1 + Math.random() * 0.4, // Varied roughness
            envMap: envTexture,
            envMapIntensity: 1.5,
            emissive: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.5, 0.1) // Subtle glow
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 6
        );
        mesh.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        pbrObjects.push(mesh);
        scene.add(mesh);
    }
    
    // Enhanced connecting lines with bloom-like effect
    const linesGeometry = new THREE.BufferGeometry();
    const lineCount = window.innerWidth < 768 ? 150 : 300; // Optimize for mobile
    const linePositions = new Float32Array(lineCount * 6);
    
    for(let i = 0; i < lineCount * 6; i += 6) {
        const particle1 = Math.floor(Math.random() * particleCount) * 3;
        const particle2 = Math.floor(Math.random() * particleCount) * 3;
        
        const dx = posArray[particle1] - posArray[particle2];
        const dy = posArray[particle1 + 1] - posArray[particle2 + 1];
        const dz = posArray[particle1 + 2] - posArray[particle2 + 2];
        const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
        
        if (distance < 3) {
            linePositions[i] = posArray[particle1];
            linePositions[i + 1] = posArray[particle1 + 1];
            linePositions[i + 2] = posArray[particle1 + 2];
            linePositions[i + 3] = posArray[particle2];
            linePositions[i + 4] = posArray[particle2 + 1];
            linePositions[i + 5] = posArray[particle2 + 2];
        } else {
            linePositions[i] = posArray[particle1];
            linePositions[i + 1] = posArray[particle1 + 1];
            linePositions[i + 2] = posArray[particle1 + 2];
            linePositions[i + 3] = posArray[particle1] + dx * 0.3;
            linePositions[i + 4] = posArray[particle1 + 1] + dy * 0.3;
            linePositions[i + 5] = posArray[particle1 + 2] + dz * 0.3;
        }
    }
    
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    
    const linesMaterial = new THREE.LineBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
    });
    
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lines);
    
    // Position camera
    camera.position.z = 4;
    
    // Animation variables
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    
    // Mouse move event for subtle interactivity
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) * 0.001;
        mouseY = (event.clientY - windowHalfY) * 0.001;
    }
    
    // Animation loop with enhanced effects
    function animate(time) {
        requestAnimationFrame(animate);
        
        // Update time uniform for animations
        particlesMaterial.uniforms.time.value = time * 0.001;
        particlesMaterial.uniforms.customCameraPosition.value.copy(camera.position);
        
        // Animate PBR objects
        pbrObjects.forEach((obj, index) => {
            obj.rotation.x += 0.005 + index * 0.001;
            obj.rotation.y += 0.003 + index * 0.0005;
            obj.position.y += Math.sin(time * 0.001 + index) * 0.002;
            
            // Dynamic emissive intensity for bloom-like effect
            const intensity = 0.1 + Math.sin(time * 0.002 + index) * 0.05;
            obj.material.emissiveIntensity = intensity;
        });
        
        // Subtle camera movement based on mouse position
        targetX = mouseX * 0.5;
        targetY = mouseY * 0.5;
        
        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (-targetY - camera.position.y) * 0.05;
        
        // Slow, subtle rotation
        particlesMesh.rotation.y += 0.0005;
        lines.rotation.y += 0.0003;
        
        // Enhanced rendering with tone mapping for bloom-like effect
        renderer.render(scene, camera);
    }
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
    
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    // Start animation
    animate();
    
    // Initialize About Us Section Three.js Animation
    initAboutUsAnimation();
    
    // Add scroll animations for content
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Chatbot Logic
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const closeBtn = document.querySelector('.chatbot-close-btn');
    const chatBody = document.getElementById('chatbot-body');
    const chatInput = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send-btn');

    // Toggle chatbot window
    chatbotToggler.addEventListener('click', () => {
        chatbotContainer.classList.add('active');
        chatbotToggler.style.display = 'none'; // Esconde o botão
    });

    closeBtn.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
        chatbotToggler.style.display = 'flex'; // Mostra o botão novamente
    });

    const sendMessage = async () => {
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;

        // Display user message
        appendMessage(userMessage, 'user');
        chatInput.value = '';

        // Adiciona um indicador de "digitando..."
        const typingIndicator = appendMessage('...', 'bot');
        typingIndicator.classList.add('typing');

        try {
            // Send message to Python backend
            const response = await fetch('http://127.0.0.1:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const botMessage = data.response;

            // Display bot response
            // Atualiza a mensagem "digitando..." com a resposta real
            typingIndicator.textContent = botMessage;
            typingIndicator.classList.remove('typing');

        } catch (error) {
            console.error('Error communicating with chatbot:', error);
            // Atualiza a mensagem "digitando..." com a mensagem de erro
            typingIndicator.textContent = 'Desculpe, estou com problemas para me conectar. Tente novamente mais tarde.';
            typingIndicator.classList.remove('typing');
        }
    };

    const appendMessage = (message, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        // Usar innerHTML permite que o bot envie links ou formatação básica no futuro
        messageElement.innerHTML = message;
        chatBody.appendChild(messageElement);
        // Scroll to the bottom
        chatBody.scrollTop = chatBody.scrollHeight;
        return messageElement; // Retorna o elemento para que possamos atualizá-lo
    };

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});

// Add subtle effect on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
    
    if (scrollPosition > 50) {
        header.style.boxShadow = '0 2px 25px rgba(0, 0, 0, 0.15)';
        header.style.background = 'rgba(15, 23, 42, 0.9)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        header.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// About Us Section Three.js Animation - Network Particles Effect
function initAboutUsAnimation() {
    const canvas = document.getElementById('about-canvas');
    if (!canvas) return;
    
    // Scene setup
    const aboutScene = new THREE.Scene();
    const aboutCamera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    const aboutRenderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true, 
        antialias: true 
    });
    
    aboutRenderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    aboutRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Network particles configuration
    const particleCount = 150;
    const connectionDistance = 120;
    const particles = [];
    
    // Create particle geometry
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];
    
    // Initialize particles with random positions and velocities
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Random positions within canvas bounds
        positions[i3] = (Math.random() - 0.5) * 800;
        positions[i3 + 1] = (Math.random() - 0.5) * 400;
        positions[i3 + 2] = (Math.random() - 0.5) * 200;
        
        // Store particle data for connections
        particles.push({
            x: positions[i3],
            y: positions[i3 + 1],
            z: positions[i3 + 2],
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            vz: (Math.random() - 0.5) * 0.2
        });
        
        velocities.push({
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5,
            z: (Math.random() - 0.5) * 0.2
        });
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Particle material with glow effect
    const particleMaterial = new THREE.PointsMaterial({
        color: 0x3b82f6,
        size: 3,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    aboutScene.add(particleSystem);
    
    // Connection lines geometry
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
    });
    
    let lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
    aboutScene.add(lineSystem);
    
    // Camera positioning
    aboutCamera.position.z = 300;
    aboutCamera.position.y = 0;
    
    // Mouse interaction
    let aboutMouseX = 0;
    let aboutMouseY = 0;
    
    canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        aboutMouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        aboutMouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    });
    
    // Animation function
    function animateAbout() {
        requestAnimationFrame(animateAbout);
        
        const time = Date.now() * 0.001;
        const positions = particleSystem.geometry.attributes.position.array;
        
        // Update particle positions
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const particle = particles[i];
            const velocity = velocities[i];
            
            // Update positions with velocity
            particle.x += velocity.x;
            particle.y += velocity.y;
            particle.z += velocity.z;
            
            // Boundary checking with smooth bounce
            if (particle.x > 400 || particle.x < -400) velocity.x *= -0.8;
            if (particle.y > 200 || particle.y < -200) velocity.y *= -0.8;
            if (particle.z > 100 || particle.z < -100) velocity.z *= -0.8;
            
            // Add subtle wave motion
            particle.y += Math.sin(time + i * 0.1) * 0.2;
            particle.x += Math.cos(time * 0.5 + i * 0.05) * 0.1;
            
            // Update geometry positions
            positions[i3] = particle.x;
            positions[i3 + 1] = particle.y;
            positions[i3 + 2] = particle.z;
        }
        
        particleSystem.geometry.attributes.position.needsUpdate = true;
        
        // Create connection lines between nearby particles
        const linePositions = [];
        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dz = particles[i].z - particles[j].z;
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                
                if (distance < connectionDistance) {
                    linePositions.push(particles[i].x, particles[i].y, particles[i].z);
                    linePositions.push(particles[j].x, particles[j].y, particles[j].z);
                }
            }
        }
        
        // Update line geometry
        aboutScene.remove(lineSystem);
        const newLineGeometry = new THREE.BufferGeometry();
        newLineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        lineSystem = new THREE.LineSegments(newLineGeometry, lineMaterial);
        aboutScene.add(lineSystem);
        
        // Subtle camera movement based on mouse
        aboutCamera.position.x += (aboutMouseX * 20 - aboutCamera.position.x) * 0.05;
        aboutCamera.position.y += (aboutMouseY * 20 - aboutCamera.position.y) * 0.05;
        aboutCamera.lookAt(0, 0, 0);
        
        // Render the scene
        aboutRenderer.render(aboutScene, aboutCamera);
    }
    
    // Handle resize for about section
    function onAboutResize() {
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        
        aboutCamera.aspect = width / height;
        aboutCamera.updateProjectionMatrix();
        aboutRenderer.setSize(width, height);
    }
    
    window.addEventListener('resize', onAboutResize);
    
    // Start about animation
    animateAbout();
}

// Footer Three.js Animation - Floating Waves Effect
function initFooterAnimation() {
    const canvas = document.getElementById('footer-canvas');
    if (!canvas) return;
    
    // Scene setup
    const footerScene = new THREE.Scene();
    const footerCamera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    const footerRenderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true, 
        antialias: true 
    });
    
    footerRenderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    footerRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create floating particles
    const particleCount = 80;
    const particles = [];
    
    // Particle geometry
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        positions[i3] = (Math.random() - 0.5) * 1000;
        positions[i3 + 1] = (Math.random() - 0.5) * 300;
        positions[i3 + 2] = (Math.random() - 0.5) * 200;
        
        particles.push({
            x: positions[i3],
            y: positions[i3 + 1],
            z: positions[i3 + 2],
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.2,
            speedZ: (Math.random() - 0.5) * 0.1,
            phase: Math.random() * Math.PI * 2
        });
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Particle material with subtle glow
    const particleMaterial = new THREE.PointsMaterial({
        color: 0x60a5fa,
        size: 2,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    footerScene.add(particleSystem);
    
    // Create floating geometric shapes
    const geometries = [
        new THREE.TetrahedronGeometry(8, 0),
        new THREE.OctahedronGeometry(6, 0),
        new THREE.IcosahedronGeometry(5, 0)
    ];
    
    const shapeMaterial = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.1,
        wireframe: true
    });
    
    const shapes = [];
    for (let i = 0; i < 6; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const shape = new THREE.Mesh(geometry, shapeMaterial);
        
        shape.position.set(
            (Math.random() - 0.5) * 800,
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 100
        );
        
        shape.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        
        shapes.push({
            mesh: shape,
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            }
        });
        
        footerScene.add(shape);
    }
    
    // Camera positioning
    footerCamera.position.z = 200;
    footerCamera.position.y = 0;
    
    // Mouse interaction
    let footerMouseX = 0;
    let footerMouseY = 0;
    
    canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        footerMouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        footerMouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    });
    
    // Animation function
    function animateFooter() {
        requestAnimationFrame(animateFooter);
        
        const time = Date.now() * 0.001;
        const positions = particleSystem.geometry.attributes.position.array;
        
        // Update particles with floating wave motion
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const particle = particles[i];
            
            // Floating wave motion
            particle.x += particle.speedX;
            particle.y += Math.sin(time * 0.5 + particle.phase) * 0.3;
            particle.z += particle.speedZ;
            
            // Boundary wrapping
            if (particle.x > 500) particle.x = -500;
            if (particle.x < -500) particle.x = 500;
            if (particle.z > 100) particle.z = -100;
            if (particle.z < -100) particle.z = 100;
            
            // Update positions
            positions[i3] = particle.x;
            positions[i3 + 1] = particle.y;
            positions[i3 + 2] = particle.z;
        }
        
        particleSystem.geometry.attributes.position.needsUpdate = true;
        
        // Animate geometric shapes
        shapes.forEach(shape => {
            shape.mesh.rotation.x += shape.rotationSpeed.x;
            shape.mesh.rotation.y += shape.rotationSpeed.y;
            shape.mesh.rotation.z += shape.rotationSpeed.z;
            
            // Floating motion
            shape.mesh.position.y += Math.sin(time * 0.3 + shape.mesh.position.x * 0.01) * 0.2;
        });
        
        // Subtle camera movement
        footerCamera.position.x += (footerMouseX * 15 - footerCamera.position.x) * 0.03;
        footerCamera.position.y += (footerMouseY * 10 - footerCamera.position.y) * 0.03;
        footerCamera.lookAt(0, 0, 0);
        
        // Render
        footerRenderer.render(footerScene, footerCamera);
    }
    
    // Handle resize
    function onFooterResize() {
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        
        footerCamera.aspect = width / height;
        footerCamera.updateProjectionMatrix();
        footerRenderer.setSize(width, height);
    }
    
    window.addEventListener('resize', onFooterResize);
    
    // Start animation
    animateFooter();
}
