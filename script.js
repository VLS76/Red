document.addEventListener('DOMContentLoaded', () => {
    // 1. Datos de las Personas (Ejemplo con 15 personas)
    const peopleData = [
        {
            id: 1,
            name: "Dr. Ana García",
            Especie: ["Ovina", "Vacuna"],
            Dispositivo: ["RFID", "Sensores acústicos"],
            Estudio: ["Comportamiento alimenticio", "Manejo"],
            Proyecto: ["Project1"],
            Status: "IP",
            Institucion: "UPV"
        },
        {
            id: 2,
            name: "Marta López",
            Especie: ["Ovina"],
            Dispositivo: ["RFID", "Collares"],
            Estudio: ["Comportamiento social"],
            Proyecto: ["Project1", "Project2"],
            Status: "Predoc",
            Institucion: "UPV"
        },
        {
            id: 3,
            name: "Pedro Ruíz",
            Especie: ["Caprina", "Porcina"],
            Dispositivo: ["Cámaras de visión", "IA"],
            Estudio: ["Nutrición"],
            Proyecto: ["Project2"],
            Status: "Postdoc",
            Institucion: "UPV"
        },
        {
            id: 4,
            name: "Dr. Juan Pérez",
            Especie: ["Avícola"],
            Dispositivo: ["Alimentadores automáticos", "Sensores de movimiento"],
            Estudio: ["Salud"],
            Proyecto: ["Project3"],
            Status: "IP",
            Institucion: "UdL"
        },
        {
            id: 5,
            name: "Laura Gómez",
            Especie: ["Avícola", "Cunícula"],
            Dispositivo: ["Drones", "Básculas"],
            Estudio: ["Manejo"],
            Proyecto: ["Project3", "Project4"],
            Status: "Predoc",
            Institucion: "UdL"
        },
        {
            id: 6,
            name: "Sofía Hernández",
            Especie: ["Vacuna"],
            Dispositivo: ["RFID", "Collares"],
            Estudio: ["Comportamiento alimenticio"],
            Proyecto: ["Project1"],
            Status: "Técnico",
            Institucion: "UdL"
        },
        {
            id: 7,
            name: "Dr. Carlos Sanz",
            Especie: ["Porcina"],
            Dispositivo: ["IA", "Cámaras de visión"],
            Estudio: ["Nutrición", "Salud"],
            Proyecto: ["Project2"],
            Status: "IP",
            Institucion: "UCO"
        },
        {
            id: 8,
            name: "Elena Marín",
            Especie: ["Porcina"],
            Dispositivo: ["Alimentadores automáticos"],
            Estudio: ["Comportamiento social"],
            Proyecto: ["Project2"],
            Status: "Postdoc",
            Institucion: "UCO"
        },
        {
            id: 9,
            name: "Francisco Jiménez",
            Especie: ["Caprina"],
            Dispositivo: ["Vallados virtuales"],
            Estudio: ["Manejo"],
            Proyecto: ["Project1"],
            Status: "Técnico",
            Institucion: "UCO"
        },
        {
            id: 10,
            name: "Dr. Isabel Castro",
            Especie: ["Ovina", "Caprina"],
            Dispositivo: ["RFID", "Sensores acústicos"],
            Estudio: ["Comportamiento alimenticio"],
            Proyecto: ["Project4"],
            Status: "IP",
            Institucion: "USAL"
        },
        {
            id: 11,
            name: "Roberto Núñez",
            Especie: ["Ovina"],
            Dispositivo: ["Collares"],
            Estudio: ["Nutrición"],
            Proyecto: ["Project4"],
            Status: "Predoc",
            Institucion: "USAL"
        },
        {
            id: 12,
            name: "Paloma Vidal",
            Especie: ["Vacuna"],
            Dispositivo: ["Drones"],
            Estudio: ["Salud"],
            Proyecto: ["Project3"],
            Status: "Postdoc",
            Institucion: "USAL"
        },
        {
            id: 13,
            name: "Dr. David Torres",
            Especie: ["Cunícula"],
            Dispositivo: ["Básculas", "Sensores de movimiento"],
            Estudio: ["Manejo"],
            Proyecto: ["Project1"],
            Status: "IP",
            Institucion: "UAB"
        },
        {
            id: 14,
            name: "Natalia Vega",
            Especie: ["Avícola"],
            Dispositivo: ["Alimentadores automáticos"],
            Estudio: ["Comportamiento social"],
            Proyecto: ["Project2"],
            Status: "Predoc",
            Institucion: "UAB"
        },
        {
            id: 15,
            name: "Sergio Morales",
            Especie: ["Porcina"],
            Dispositivo: ["Cámaras de visión"],
            Estudio: ["Nutrición"],
            Proyecto: ["Project3"],
            Status: "Técnico",
            Institucion: "UAB"
        }
    ];

    // 2. Definición de los Campos y sus Indicadores
    const fields = {
        Especie: ["Ovina", "Caprina", "Vacuna", "Porcina", "Avícola", "Cunícula"],
        Dispositivo: ["Drones", "RFID", "Collares", "Cámaras de visión", "IA", "Alimentadores automáticos", "Básculas", "Sensores acústicos", "Sensores de movimiento", "Vallados virtuales"],
        Estudio: ["Comportamiento alimenticio", "Comportamiento social", "Manejo", "Nutrición", "Salud"],
        Proyecto: ["Project1", "Project2", "Project3", "Project4"],
        Status: ["IP", "Predoc", "Postdoc", "Técnico"],
        Institucion: ["UPV", "UdL", "UCO", "USAL", "UAB"]
    };

    const filtersContainer = document.getElementById('filters-container');
    const networkContainer = document.getElementById('network-visualization');
    const personDetailsBox = document.getElementById('person-details');
    const personNameElement = document.getElementById('person-name');
    const personIndicatorsElement = document.getElementById('person-indicators');

    let selectedFilters = {}; // Objeto para almacenar los filtros seleccionados

    // Inicializar selectedFilters con arrays vacíos para cada campo
    for (const field in fields) {
        selectedFilters[field] = [];
    }

    // 3. Generación Dinámica de Filtros
    function generateFilters() {
        for (const field in fields) {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('filter-category', field); // Añade el nombre del campo como clase para el borde
            
            const headerDiv = document.createElement('div');
            headerDiv.classList.add('category-header');
            headerDiv.textContent = field;
            categoryDiv.appendChild(headerDiv);

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('category-content');

            fields[field].forEach(indicator => {
                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = indicator;
                checkbox.dataset.field = field; // Para identificar el campo al que pertenece

                checkbox.addEventListener('change', (event) => {
                    if (event.target.checked) {
                        selectedFilters[field].push(indicator);
                    } else {
                        selectedFilters[field] = selectedFilters[field].filter(item => item !== indicator);
                    }
                    updateNetwork(); // Actualizar la red al cambiar un filtro
                });

                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(indicator));
                contentDiv.appendChild(label);
            });
            categoryDiv.appendChild(contentDiv);
            filtersContainer.appendChild(categoryDiv);

            // Manejar el despliegue/plegado del acordeón
            headerDiv.addEventListener('click', () => {
                contentDiv.classList.toggle('expanded');
                headerDiv.classList.toggle('active');
            });
        }
    }

    // 4. Filtrado de Personas
    function filterPeople() {
        const activeFilters = Object.values(selectedFilters).flat(); // Obtener todos los indicadores seleccionados

        if (activeFilters.length === 0) {
            return peopleData; // Si no hay filtros seleccionados, mostrar todas las personas
        }

        const filtered = peopleData.filter(person => {
            return activeFilters.some(filter => {
                for (const field in fields) {
                    if (Array.isArray(person[field])) { // Para campos con múltiples indicadores (Especie, Dispositivo, etc.)
                        if (person[field].includes(filter)) {
                            return true;
                        }
                    } else if (person[field] === filter) { // Para campos con un solo indicador (Status, Institucion)
                        return true;
                    }
                }
                return false;
            });
        });
        return filtered;
    }

    // 5. Visualización de la Red con vis.js
    let network = null; // Variable para almacenar la instancia de la red

    function updateNetwork() {
        const filteredPeople = filterPeople();

        const nodes = [];
        const edges = [];
        const ipNodes = {}; // Para agrupar IPs y sus satélites

        // Crear nodos
        filteredPeople.forEach(person => {
            const isIP = person.Status === "IP";
            const nodeSize = isIP ? 30 : 20; // IPs más grandes

            // Color del nodo basado en la institución
            let nodeColor;
            switch(person.Institucion) {
                case "UPV": nodeColor = "#ff7f0e"; break; // Naranja
                case "UdL": nodeColor = "#1f77b4"; break; // Azul
                case "UCO": nodeColor = "#2ca02c"; break; // Verde
                case "USAL": nodeColor = "#d62728"; break; // Rojo
                case "UAB": nodeColor = "#9467bd"; break; // Púrpura
                default: nodeColor = "#888";
            }

            nodes.push({
                id: person.id,
                label: person.name,
                shape: 'dot',
                size: nodeSize,
                color: {
                    background: nodeColor,
                    border: '#333'
                },
                font: { color: '#333' },
                personData: person // Almacenar todos los datos de la persona en el nodo
            });

            if (isIP) {
                if (!ipNodes[person.Institucion]) {
                    ipNodes[person.Institucion] = [];
                }
                ipNodes[person.Institucion].push(person.id);
            }
        });

        // Crear conexiones (edges)
        // Conectar personas de la misma institución y entre sí
        filteredPeople.forEach(person1 => {
            filteredPeople.forEach(person2 => {
                if (person1.id < person2.id) { // Para evitar duplicados y auto-conexiones
                    let connectionType = [];

                    // Conexión por Institución
                    if (person1.Institucion === person2.Institucion) {
                        connectionType.push("Institución");
                        if (person1.Status === "IP" && person2.Status !== "IP" || person2.Status === "IP" && person1.Status !== "IP") {
                             // Para la disposición satelital, vis.js maneja esto con grupos o physics,
                             // pero para una representación simple, los conectamos.
                        }
                    }

                    // Conexión por Proyectos Comunes
                    const commonProjects = person1.Proyecto.filter(p1 => person2.Proyecto.includes(p1));
                    if (commonProjects.length > 0) {
                        connectionType.push(`Proyectos: ${commonProjects.join(', ')}`);
                    }

                    // Puedes añadir más tipos de conexiones si lo deseas
                    // Por ejemplo, si tienen la misma Especie o Dispositivo
                    const commonSpecies = person1.Especie.filter(s1 => person2.Especie.includes(s1));
                    if (commonSpecies.length > 0) {
                        connectionType.push(`Especie: ${commonSpecies.join(', ')}`);
                    }

                    if (connectionType.length > 0) {
                        edges.push({
                            from: person1.id,
                            to: person2.id,
                            arrows: 'to',
                            label: connectionType.join('\n'), // Mostrar el tipo de conexión
                            font: { align: 'middle', size: 10, color: '#666', background: 'white' },
                            color: { color: '#aaa', highlight: '#333' }
                        });
                    }
                }
            });
        });

        const data = {
            nodes: new vis.DataSet(nodes),
            edges: new vis.DataSet(edges)
        };

        const options = {
            nodes: {
                borderWidth: 2,
                shape: 'dot',
                font: {
                    size: 12,
                    color: '#333'
                }
            },
            edges: {
                color: { inherit: true },
                width: 1,
                smooth: {
                    type: 'continuous'
                }
            },
            physics: {
                forceAtlas2Based: {
                    gravitationalConstant: -26,
                    centralGravity: 0.005,
                    springLength: 200,
                    springConstant: 0.18
                },
                maxVelocity: 146,
                solver: 'forceAtlas2Based',
                timestep: 0.35,
                stabilization: { iterations: 150 }
            },
            interaction: {
                hover: true,
                tooltipDelay: 200,
                hideEdgesOnDrag: true,
                hideNodesOnDrag: false
                //zoomView: false // Deshabilita el zoom si no lo quieres
            }
        };

        // Si ya existe una instancia de la red, la destruimos para crear una nueva
        if (network !== null) {
            network.destroy();
        }

        network = new vis.Network(networkContainer, data, options);

        // Manejar el clic en un nodo para mostrar los detalles de la persona
        network.on("click", (params) => {
            if (params.nodes.length > 0) {
                const nodeId = params.nodes[0];
                const clickedNode = data.nodes.get(nodeId);
                const person = clickedNode.personData;

                personNameElement.textContent = person.name;
                personIndicatorsElement.innerHTML = `
                    <ul>
                        <li><strong>Especie:</strong> ${person.Especie.join(', ')}</li>
                        <li><strong>Dispositivo:</strong> ${person.Dispositivo.join(', ')}</li>
                        <li><strong>Estudio:</strong> ${person.Estudio.join(', ')}</li>
                        <li><strong>Proyecto:</strong> ${person.Proyecto.join(', ')}</li>
                        <li><strong>Status:</strong> ${person.Status}</li>
                        <li><strong>Institución:</strong> ${person.Institucion}</li>
                    </ul>
                `;
                personDetailsBox.style.display = 'block';
            } else {
                personDetailsBox.style.display = 'none'; // Ocultar si no se clicó en ningún nodo
            }
        });

        // Opcional: Para el diseño "satelital"
        // vis.js maneja esto mejor con sus propias opciones de diseño de física y grupos.
        // Podrías definir "grupos" para IPs y no IPs, y configurar sus fuerzas.
        // Para una implementación más avanzada de la disposición satelital,
        // podrías necesitar manipular las posiciones de los nodos directamente
        // después de que la física se estabilice, o usar una librería de fuerza de diseño
        // como d3-force para un control más fino.
        // Por ahora, las conexiones y el tamaño diferenciado ya dan una pista.
    }

    // Inicializar: generar filtros y mostrar la red con todas las personas
    generateFilters();
    updateNetwork();
});