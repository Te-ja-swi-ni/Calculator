// DOM Elements - Main
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const unitSystemSelect = document.getElementById('unitSystem');
const unitLabels = document.querySelectorAll('.unit-label');

// ==================== CONCRETE CALCULATOR ====================
const structureTypeSelect = document.getElementById('structureType');
const structureInputs = document.getElementById('structureInputs');
const mixSelect = document.getElementById('mix');
const wasteInput = document.getElementById('waste');
const cementBrandSelect = document.getElementById('cementBrand');

// Concrete Results Elements
const volText = document.getElementById('volText');
const cementText = document.getElementById('cementText');
const sandText = document.getElementById('sandText');
const aggText = document.getElementById('aggText');
const costText = document.getElementById('costText');

// ==================== BRICKWORK CALCULATOR ====================
const wallTypeSelect = document.getElementById('wallType');
const wallLengthInput = document.getElementById('wallLength');
const wallHeightInput = document.getElementById('wallHeight');
const wallQuantityInput = document.getElementById('wallQuantity');
const brickWasteInput = document.getElementById('brickWaste');

// Brickwork Results Elements
const bricksText = document.getElementById('bricksText');
const mortarText = document.getElementById('mortarText');
const brickCementText = document.getElementById('brickCementText');
const brickSandText = document.getElementById('brickSandText');
const brickCostText = document.getElementById('brickCostText');

// ==================== PLASTER CALCULATOR ====================
const plasterLengthInput = document.getElementById('plasterLength');
const plasterHeightInput = document.getElementById('plasterHeight');
const plasterThicknessInput = document.getElementById('plasterThickness');
const plasterQuantityInput = document.getElementById('plasterQuantity');
const plasterWasteInput = document.getElementById('plasterWaste');

// Plaster Results Elements
const plasterAreaText = document.getElementById('plasterAreaText');
const plasterCementText = document.getElementById('plasterCementText');
const plasterSandText = document.getElementById('plasterSandText');
const plasterCostText = document.getElementById('plasterCostText');
const plasterLaborText = document.getElementById('plasterLaborText');

// ==================== FLOORING CALCULATOR ====================
const floorLengthInput = document.getElementById('floorLength');
const floorWidthInput = document.getElementById('floorWidth');
const tileLengthInput = document.getElementById('tileLength');
const tileWidthInput = document.getElementById('tileWidth');
const tilePriceInput = document.getElementById('tilePrice');
const tileWasteInput = document.getElementById('tileWaste');
const groutWidthInput = document.getElementById('groutWidth');

// Flooring Results Elements
const roomAreaText = document.getElementById('roomAreaText');
const tilesText = document.getElementById('tilesText');
const tileCostText = document.getElementById('tileCostText');
const groutText = document.getElementById('groutText');
const adhesiveText = document.getElementById('adhesiveText');

// ==================== PAINT CALCULATOR ====================
const paintLengthInput = document.getElementById('paintLength');
const paintHeightInput = document.getElementById('paintHeight');
const doorsCountInput = document.getElementById('doorsCount');
const windowsCountInput = document.getElementById('windowsCount');
const coatsCountInput = document.getElementById('coatsCount');
const paintCoverageInput = document.getElementById('paintCoverage');
const paintPriceInput = document.getElementById('paintPrice');
const paintWasteInput = document.getElementById('paintWaste');

// Paint Results Elements
const paintAreaText = document.getElementById('paintAreaText');
const paintLitersText = document.getElementById('paintLitersText');
const paintCansText = document.getElementById('paintCansText');
const paintCostText = document.getElementById('paintCostText');
const laborTimeText = document.getElementById('laborTimeText');

// ==================== STEEL CALCULATOR ====================
const steelStructureTypeSelect = document.getElementById('steelStructureType');
const steelLengthInput = document.getElementById('steelLength');
const steelWidthInput = document.getElementById('steelWidth');
const steelHeightInput = document.getElementById('steelHeight');
const barDiameterSelect = document.getElementById('barDiameter');
const barSpacingInput = document.getElementById('barSpacing');
const steelPriceInput = document.getElementById('steelPrice');
const steelWasteInput = document.getElementById('steelWaste');

// Steel Results Elements
const steelWeightText = document.getElementById('steelWeightText');
const barsCountText = document.getElementById('barsCountText');
const barsLengthText = document.getElementById('barsLengthText');
const steelCostText = document.getElementById('steelCostText');
const steelPerCubeText = document.getElementById('steelPerCubeText');

// ==================== EXCAVATION CALCULATOR ====================
const excavationTypeSelect = document.getElementById('excavationType');
const excLengthInput = document.getElementById('excLength');
const excWidthInput = document.getElementById('excWidth');
const excDepthInput = document.getElementById('excDepth');
const soilTypeSelect = document.getElementById('soilType');
const truckCapacityInput = document.getElementById('truckCapacity');
const excavationRateInput = document.getElementById('excavationRate');
const transportRateInput = document.getElementById('transportRate');

// Excavation Results Elements
const excVolumeText = document.getElementById('excVolumeText');
const trucksCountText = document.getElementById('trucksCountText');
const excCostText = document.getElementById('excCostText');
const transportCostText = document.getElementById('transportCostText');
const totalExcCostText = document.getElementById('totalExcCostText');

// ==================== QUICK TOOLS ====================
const convertValueInput = document.getElementById('convertValue');
const convertFromSelect = document.getElementById('convertFrom');
const convertToSelect = document.getElementById('convertTo');
const conversionResult = document.getElementById('conversionResult');
const shapeTypeSelect = document.getElementById('shapeType');
const areaLengthInput = document.getElementById('areaLength');
const areaWidthInput = document.getElementById('areaWidth');
const areaResult = document.getElementById('areaResult');

// Chart Instances
let materialChart, brickworkChart, plasterChart, flooringChart, paintChart, steelChart, excavationChart;

// Initialize all charts
const initializeCharts = () => {
    // Concrete Chart
    const concreteCtx = document.getElementById('materialChart').getContext('2d');
    materialChart = new Chart(concreteCtx, {
        type: 'doughnut',
        data: {
            labels: ['Cement', 'Sand', 'Aggregate'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#ff6b5b', '#ff9f68', '#ffd4a3'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '65%',
            plugins: { legend: { display: false } },
            animation: { animateRotate: true, duration: 1000 }
        }
    });

    // Brickwork Chart
    const brickworkCtx = document.getElementById('brickworkChart').getContext('2d');
    brickworkChart = new Chart(brickworkCtx, {
        type: 'doughnut',
        data: {
            labels: ['Bricks', 'Cement', 'Sand'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#e74c3c', '#ff6b5b', '#ff9f68'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '65%',
            plugins: { legend: { display: false } },
            animation: { animateRotate: true, duration: 1000 }
        }
    });

    // Plaster Chart
    const plasterCtx = document.getElementById('plasterChart').getContext('2d');
    plasterChart = new Chart(plasterCtx, {
        type: 'doughnut',
        data: {
            labels: ['Cement', 'Sand'],
            datasets: [{
                data: [0, 0],
                backgroundColor: ['#ff6b5b', '#ff9f68'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '65%',
            plugins: { legend: { display: false } },
            animation: { animateRotate: true, duration: 1000 }
        }
    });

    // Flooring Chart
    const flooringCtx = document.getElementById('flooringChart').getContext('2d');
    flooringChart = new Chart(flooringCtx, {
        type: 'doughnut',
        data: {
            labels: ['Tiles', 'Adhesive', 'Grout'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#9b59b6', '#3498db', '#2ecc71'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '65%',
            plugins: { legend: { display: false } },
            animation: { animateRotate: true, duration: 1000 }
        }
    });

    // Paint Chart
    const paintCtx = document.getElementById('paintChart').getContext('2d');
    paintChart = new Chart(paintCtx, {
        type: 'doughnut',
        data: {
            labels: ['Walls', 'Doors', 'Windows'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#e67e22', '#1abc9c', '#d35400'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '65%',
            plugins: { legend: { display: false } },
            animation: { animateRotate: true, duration: 1000 }
        }
    });

    // Steel Chart
    const steelCtx = document.getElementById('steelChart').getContext('2d');
    steelChart = new Chart(steelCtx, {
        type: 'doughnut',
        data: {
            labels: ['Main Bars', 'Distribution', 'Stirrups'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#c0392b', '#8e44ad', '#2980b9'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '65%',
            plugins: { 
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed.toFixed(1)} kg`;
                        }
                    }
                }
            },
            animation: { animateRotate: true, duration: 1000 }
        }
    });

    // Excavation Chart
    const excavationCtx = document.getElementById('excavationChart').getContext('2d');
    excavationChart = new Chart(excavationCtx, {
        type: 'doughnut',
        data: {
            labels: ['Excavation', 'Transport', 'Labor'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#7f8c8d', '#f39c12', '#16a085'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '65%',
            plugins: { legend: { display: false } },
            animation: { animateRotate: true, duration: 1000 }
        }
    });
};

// Material Densities for Accurate Calculations (kg/m³)
const materialDensity = {
    sand: 1600,
    cement: 1440,
    aggregate: 1500
};

// Price Database
const cementPrices = {
    ultratech: 390,
    ambuja: 370,
    acc: 380,
    dalmia: 400
};

const sandPricePerTon = 60;
const aggregatePricePerTon = 70;
const brickPrice = 8;

// ==================== UNIT CONVERSION FUNCTIONS ====================
function toMeters(value, unit) {
    const conversions = {
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'ft': 0.3048,
        'in': 0.0254
    };
    return value * (conversions[unit] || 1);
}

function getLengthUnitSuffix(unit) {
    const suffixes = {
        'm': 'm',
        'cm': 'cm',
        'mm': 'mm',
        'ft': 'ft',
        'in': 'in'
    };
    return suffixes[unit] || 'm';
}

// Update unit labels
function updateUnitLabels() {
    const unit = unitSystemSelect.value;
    const suffix = getLengthUnitSuffix(unit);
    unitLabels.forEach(label => {
        label.textContent = suffix;
    });
}

// ==================== CONCRETE CALCULATOR FUNCTIONS ====================
function generateStructureInputs(structureType) {
    let html = '';
    const defaultUnit = unitSystemSelect.value;

    const createDimensionInput = (id, label, placeholder, defaultValue = '') => {
        return `
            <div class="input-group">
                <label><i class="fas fa-ruler"></i> ${label}</label>
                <div class="input-with-unit">
                    <input type="number" id="${id}" placeholder="${placeholder}" step="0.01" value="${defaultValue}">
                    <select class="unit-selector-small" id="${id}Unit">
                        <option value="m">m</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="ft">ft</option>
                        <option value="in">in</option>
                    </select>
                </div>
            </div>
        `;
    };

    switch(structureType) {
        case 'slab':
            html = `
                ${createDimensionInput('length', 'Length', 'Enter length', '5')}
                ${createDimensionInput('width', 'Width', 'Enter width', '3')}
                ${createDimensionInput('height', 'Thickness', 'Enter thickness', '0.15')}
                <div class="input-group">
                    <label><i class="fas fa-cubes"></i> Number of Slabs</label>
                    <input type="number" id="quantity" value="1" min="1">
                </div>
            `;
            break;

        case 'beam':
            html = `
                ${createDimensionInput('length', 'Length', 'Enter length', '4')}
                ${createDimensionInput('width', 'Width', 'Enter width', '0.23')}
                ${createDimensionInput('height', 'Height', 'Enter height', '0.45')}
                <div class="input-group">
                    <label><i class="fas fa-cubes"></i> Number of Beams</label>
                    <input type="number" id="quantity" value="1" min="1">
                </div>
            `;
            break;

        case 'column':
            html = `
                ${createDimensionInput('length', 'Length', 'Enter length', '0.23')}
                ${createDimensionInput('width', 'Width', 'Enter width', '0.23')}
                ${createDimensionInput('height', 'Height', 'Enter height', '3')}
                <div class="input-group">
                    <label><i class="fas fa-cubes"></i> Number of Columns</label>
                    <input type="number" id="quantity" value="1" min="1">
                </div>
            `;
            break;

        case 'circular-column':
            html = `
                ${createDimensionInput('diameter', 'Diameter', 'Enter diameter', '0.3')}
                ${createDimensionInput('height', 'Height', 'Enter height', '3')}
                <div class="input-group">
                    <label><i class="fas fa-cubes"></i> Number of Columns</label>
                    <input type="number" id="quantity" value="1" min="1">
                </div>
            `;
            break;

        case 'stair':
            html = `
                <div class="stair-inputs">
                    <h4>Staircase Dimensions</h4>
                    ${createDimensionInput('rise', 'Rise Height', 'Single step height', '0.15')}
                    ${createDimensionInput('tread', 'Tread Length', 'Step depth', '0.25')}
                    ${createDimensionInput('width', 'Width', 'Stair width', '1')}
                    <div class="input-group">
                        <label>Number of Steps</label>
                        <input type="number" id="steps" placeholder="Total steps" min="1" value="10">
                    </div>
                    <div class="input-group">
                        <label>Number of Staircases</label>
                        <input type="number" id="quantity" value="1" min="1">
                    </div>
                </div>
            `;
            break;

        case 'footing':
            html = `
                <div class="footing-inputs">
                    <h4>Footing Dimensions</h4>
                    ${createDimensionInput('length', 'Length', 'Footing length', '1.5')}
                    ${createDimensionInput('width', 'Width', 'Footing width', '1.5')}
                    ${createDimensionInput('height', 'Height', 'Footing height', '0.5')}
                    <div class="input-group">
                        <label>Number of Footings</label>
                        <input type="number" id="quantity" value="1" min="1">
                    </div>
                </div>
            `;
            break;

        case 'wall':
            html = `
                ${createDimensionInput('length', 'Length', 'Wall length', '4')}
                ${createDimensionInput('height', 'Height', 'Wall height', '3')}
                ${createDimensionInput('width', 'Thickness', 'Wall thickness', '0.15')}
                <div class="input-group">
                    <label>Number of Walls</label>
                    <input type="number" id="quantity" value="1" min="1">
                </div>
            `;
            break;
    }

    structureInputs.innerHTML = html;
    
    // Set default units based on global unit system
    document.querySelectorAll('.unit-selector-small').forEach(selector => {
        selector.value = defaultUnit;
    });
}

function calculateConcrete() {
    try {
        const structureType = structureTypeSelect.value;
        const quantity = parseInt(document.getElementById('quantity')?.value || 1);
        const waste = parseFloat(wasteInput.value) || 0;
        const mix = mixSelect.value;
        const ratio = mix.split(':').map(Number);

        let volume = 0;

        // Get values with individual units
        const getDimension = (id) => {
            const value = parseFloat(document.getElementById(id)?.value || 0);
            const unit = document.getElementById(id + 'Unit')?.value || 'm';
            return toMeters(value, unit);
        };

        switch(structureType) {
            case 'slab':
            case 'beam':
            case 'wall':
            case 'footing':
                const L = getDimension('length');
                const W = getDimension('width');
                const H = getDimension('height');
                volume = L * W * H * quantity;
                break;

            case 'column':
                const L_col = getDimension('length');
                const W_col = getDimension('width');
                const H_col = getDimension('height');
                volume = L_col * W_col * H_col * quantity;
                break;

            case 'circular-column':
                const diameter = getDimension('diameter');
                const H_circ = getDimension('height');
                volume = Math.PI * Math.pow(diameter / 2, 2) * H_circ * quantity;
                break;

            case 'stair':
                const rise = getDimension('rise');
                const tread = getDimension('tread');
                const width_stair = getDimension('width');
                const steps = parseInt(document.getElementById('steps')?.value || 0);
                const stepVolume = (rise * tread * width_stair) * 0.5;
                volume = stepVolume * steps * quantity;
                break;
        }

        if (volume <= 0) {
            alert('Please enter valid dimensions');
            return;
        }

        // Calculate materials with correct ratios (apply waste to each material individually)
        const totalParts = ratio.reduce((a, b) => a + b, 0);
        const cementVolume = (ratio[0] / totalParts) * volume;
        const sandVolume = (ratio[1] / totalParts) * volume;
        const aggregateVolume = (ratio[2] / totalParts) * volume;

        // Convert to practical units with individual waste factors
        const cementBags = Math.ceil((cementVolume / 0.0347) * (1 + waste / 100));
        const sandTons = ((sandVolume * materialDensity.sand) / 1000) * (1 + waste / 100);
        const aggregateTons = ((aggregateVolume * materialDensity.aggregate) / 1000) * (1 + waste / 100);

        // Calculate costs
        const cementCost = cementBags * (cementPrices[cementBrandSelect.value] || 0);
        const sandCost = sandTons * sandPricePerTon;
        const aggregateCost = aggregateTons * aggregatePricePerTon;
        const totalCost = cementCost + sandCost + aggregateCost;

        // Display results
        volText.innerHTML = `<span class="result-value">${volume.toFixed(3)} m³</span>`;
        cementText.innerHTML = `<span class="result-value">${cementBags} bags</span>`;
        sandText.innerHTML = `<span class="result-value">${sandTons.toFixed(2)} tons</span>`;
        aggText.innerHTML = `<span class="result-value">${aggregateTons.toFixed(2)} tons</span>`;
        costText.innerHTML = `<span class="result-value">₹ ${totalCost.toLocaleString('en-IN')}</span>`;

        // Update chart
        materialChart.data.datasets[0].data = [cementBags, sandTons, aggregateTons];
        materialChart.update();

        // Add success animation
        document.querySelector('.results').classList.add('success-pulse');
        setTimeout(() => {
            document.querySelector('.results').classList.remove('success-pulse');
        }, 600);

    } catch (error) {
        console.error('Calculation error:', error);
        alert('Error in calculation. Please check your inputs.');
    }
}

function resetConcreteCalculator() {
    const inputs = structureInputs.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        if (input.id !== 'quantity' && input.id !== 'steps') {
            input.value = '';
        }
    });
    
    // Reset to default demo values
    setTimeout(() => {
        if (document.getElementById('length')) document.getElementById('length').value = '5';
        if (document.getElementById('width')) document.getElementById('width').value = '3';
        if (document.getElementById('height')) document.getElementById('height').value = '0.15';
        if (document.getElementById('steps')) document.getElementById('steps').value = '10';
    }, 100);
    
    wasteInput.value = '5';
    
    // Reset results
    volText.innerHTML = '<span class="result-value">0 m³</span>';
    cementText.innerHTML = '<span class="result-value">0 bags</span>';
    sandText.innerHTML = '<span class="result-value">0 tons</span>';
    aggText.innerHTML = '<span class="result-value">0 tons</span>';
    costText.innerHTML = '—';
    materialChart.data.datasets[0].data = [0, 0, 0];
    materialChart.update();
}

// ==================== BRICKWORK CALCULATOR FUNCTIONS ====================
function calculateBrickwork() {
    try {
        const wallType = wallTypeSelect.value;
        const length = parseFloat(wallLengthInput.value) || 0;
        const height = parseFloat(wallHeightInput.value) || 0;
        const quantity = parseInt(wallQuantityInput.value) || 1;
        const wastage = parseFloat(brickWasteInput.value) || 0;

        if (!length || !height) {
            alert('Please enter wall length and height');
            return;
        }

        // Convert to meters
        const unit = unitSystemSelect.value;
        const L = toMeters(length, unit);
        const H = toMeters(height, unit);

        // Calculate wall area
        const wallArea = L * H * quantity;

        // Standard brick dimensions (230mm x 115mm x 75mm)
        const brickLength = 0.230;
        const brickHeight = 0.075;
        const brickWidth = 0.115;

        // Calculate bricks based on wall type with mortar (more accurate calculation)
        const mortarThickness = 0.01;
        let bricksPerSqMeter;

        switch(wallType) {
            case 'single':
                bricksPerSqMeter = 1 / ((brickLength + mortarThickness) * (brickHeight + mortarThickness));
                break;
            case 'double':
                bricksPerSqMeter = 2 / ((brickLength + mortarThickness) * (brickHeight + mortarThickness));
                break;
            case 'partition':
                bricksPerSqMeter = 1.5 / ((brickLength + mortarThickness) * (brickHeight + mortarThickness));
                break;
        }

        const totalBricks = Math.ceil(bricksPerSqMeter * wallArea * (1 + wastage/100));

        // Calculate mortar volume more accurately (volume of joints)
        const bricksWithoutMortar = Math.ceil(bricksPerSqMeter * wallArea);
        const mortarVolume = (wallArea * 0.01) - (bricksWithoutMortar * brickLength * brickHeight * brickWidth); // 10mm mortar thickness

        // Ensure mortar volume is positive
        const actualMortarVolume = Math.max(mortarVolume, wallArea * 0.01 * 0.3); // Minimum 30% of joint volume

        // Calculate cement and sand for mortar (1:6 ratio)
        const totalParts = 7;
        const cementVolume = (1 / totalParts) * actualMortarVolume;
        const sandVolume = (6 / totalParts) * actualMortarVolume;

        const cementBags = Math.ceil(cementVolume / 0.0347);
        const sandTons = (sandVolume * materialDensity.sand) / 1000;

        // Calculate costs
        const brickCost = totalBricks * brickPrice;
        const cementCost = cementBags * cementPrices.ultratech;
        const sandCost = sandTons * sandPricePerTon;
        const totalCost = brickCost + cementCost + sandCost;

        // Display results
        bricksText.innerHTML = `<span class="result-value">${totalBricks.toLocaleString('en-IN')}</span>`;
        mortarText.innerHTML = `<span class="result-value">${actualMortarVolume.toFixed(3)} m³</span>`;
        brickCementText.innerHTML = `<span class="result-value">${cementBags} bags</span>`;
        brickSandText.innerHTML = `<span class="result-value">${sandTons.toFixed(2)} tons</span>`;
        brickCostText.innerHTML = `<span class="result-value">₹ ${totalCost.toLocaleString('en-IN')}</span>`;

        // Update brickwork chart
        brickworkChart.data.datasets[0].data = [brickCost, cementCost, sandCost];
        brickworkChart.update();

    } catch (error) {
        console.error('Brickwork calculation error:', error);
        alert('Error in brickwork calculation. Please check your inputs.');
    }
}

function resetBrickworkCalculator() {
    wallLengthInput.value = '';
    wallHeightInput.value = '';
    wallQuantityInput.value = '1';
    brickWasteInput.value = '5';
    
    bricksText.innerHTML = '<span class="result-value">0</span>';
    mortarText.innerHTML = '<span class="result-value">0 m³</span>';
    brickCementText.innerHTML = '<span class="result-value">0 bags</span>';
    brickSandText.innerHTML = '<span class="result-value">0 tons</span>';
    brickCostText.innerHTML = '—';
    brickworkChart.data.datasets[0].data = [0, 0, 0];
    brickworkChart.update();
}

// ==================== PLASTER CALCULATOR FUNCTIONS ====================
function calculatePlaster() {
    try {
        const length = parseFloat(plasterLengthInput.value) || 0;
        const height = parseFloat(plasterHeightInput.value) || 0;
        const thickness = parseFloat(plasterThicknessInput.value) || 0;
        const quantity = parseInt(plasterQuantityInput.value) || 1;
        const wastage = parseFloat(plasterWasteInput.value) || 0;

        if (!length || !height || !thickness) {
            alert('Please enter all required dimensions');
            return;
        }

        // Convert to meters
        const unit = unitSystemSelect.value;
        const L = toMeters(length, unit);
        const H = toMeters(height, unit);
        const T = toMeters(thickness / 1000, 'm'); // Convert mm to meters

        // Calculate plaster area and volume
        const plasterArea = L * H * quantity;
        const plasterVolume = plasterArea * T;

        // Calculate materials for plaster (1:4 ratio) with individual waste
        const totalParts = 5;
        const cementVolume = (1 / totalParts) * plasterVolume;
        const sandVolume = (4 / totalParts) * plasterVolume;

        // Convert to practical units with waste
        const cementBags = Math.ceil((cementVolume / 0.0347) * (1 + wastage/100));
        const sandTons = ((sandVolume * materialDensity.sand) / 1000) * (1 + wastage/100);

        // Calculate cost and labor (more realistic labor estimate)
        const cementCost = cementBags * cementPrices.ultratech;
        const sandCost = sandTons * sandPricePerTon;
        const totalCost = cementCost + sandCost;
        const laborHours = Math.ceil(plasterArea / 5); // 5m² per hour for quality work

        // Display results
        plasterAreaText.innerHTML = `<span class="result-value">${plasterArea.toFixed(2)} m²</span>`;
        plasterCementText.innerHTML = `<span class="result-value">${cementBags} bags</span>`;
        plasterSandText.innerHTML = `<span class="result-value">${sandTons.toFixed(2)} tons</span>`;
        plasterCostText.innerHTML = `<span class="result-value">₹ ${totalCost.toLocaleString('en-IN')}</span>`;
        plasterLaborText.innerHTML = `<span class="result-value">${laborHours} hours</span>`;

        // Update plaster chart
        plasterChart.data.datasets[0].data = [cementBags, sandTons];
        plasterChart.update();

    } catch (error) {
        console.error('Plaster calculation error:', error);
        alert('Error in plaster calculation. Please check your inputs.');
    }
}

function resetPlasterCalculator() {
    plasterLengthInput.value = '';
    plasterHeightInput.value = '';
    plasterThicknessInput.value = '12';
    plasterQuantityInput.value = '1';
    plasterWasteInput.value = '5';
    
    plasterAreaText.innerHTML = '<span class="result-value">0 m²</span>';
    plasterCementText.innerHTML = '<span class="result-value">0 bags</span>';
    plasterSandText.innerHTML = '<span class="result-value">0 tons</span>';
    plasterCostText.innerHTML = '—';
    plasterLaborText.innerHTML = '—';
    plasterChart.data.datasets[0].data = [0, 0];
    plasterChart.update();
}

// ==================== FLOORING CALCULATOR FUNCTIONS ====================
function calculateFlooring() {
    try {
        // Get room dimensions
        const roomLength = parseFloat(floorLengthInput.value) || 0;
        const roomWidth = parseFloat(floorWidthInput.value) || 0;

        // Get tile dimensions
        const tileLength = parseFloat(tileLengthInput.value) || 0;
        const tileWidth = parseFloat(tileWidthInput.value) || 0;
        const tilePrice = parseFloat(tilePriceInput.value) || 0;
        const wastage = parseFloat(tileWasteInput.value) || 0;
        const groutWidth = parseFloat(groutWidthInput.value) || 0;

        if (!roomLength || !roomWidth || !tileLength || !tileWidth) {
            alert('Please enter all required dimensions');
            return;
        }

        // Convert room dimensions to meters
        const unit = unitSystemSelect.value;
        const roomArea = toMeters(roomLength, unit) * toMeters(roomWidth, unit);
        
        // Convert tile dimensions to meters and calculate area
        const tileArea = (tileLength / 100) * (tileWidth / 100);
        
        // Calculate tiles needed with wastage (simpler and more accurate)
        const tilesNeeded = Math.ceil((roomArea / tileArea) * (1 + wastage/100));
        
        // Calculate materials (industry standards)
        const totalTileCost = tilesNeeded * tilePrice;
        const groutRequired = (roomArea * 1.5).toFixed(1); // 1.5kg per m² (more realistic)
        const adhesiveRequired = (roomArea * 4).toFixed(1); // 4kg per m²

        // Calculate costs for chart
        const groutCost = parseFloat(groutRequired) * 8; // ₹8 per kg
        const adhesiveCost = parseFloat(adhesiveRequired) * 3; // ₹3 per kg

        // Display results
        roomAreaText.innerHTML = `<span class="result-value">${roomArea.toFixed(2)} m²</span>`;
        tilesText.innerHTML = `<span class="result-value">${tilesNeeded}</span>`;
        tileCostText.innerHTML = `<span class="result-value">₹ ${totalTileCost.toLocaleString('en-IN')}</span>`;
        groutText.innerHTML = `<span class="result-value">${groutRequired} kg</span>`;
        adhesiveText.innerHTML = `<span class="result-value">${adhesiveRequired} kg</span>`;

        // Update flooring chart
        flooringChart.data.datasets[0].data = [totalTileCost, adhesiveCost, groutCost];
        flooringChart.update();

    } catch (error) {
        console.error('Flooring calculation error:', error);
        alert('Error in flooring calculation. Please check your inputs.');
    }
}

function resetFlooringCalculator() {
    floorLengthInput.value = '';
    floorWidthInput.value = '';
    tileLengthInput.value = '30';
    tileWidthInput.value = '30';
    tilePriceInput.value = '45';
    tileWasteInput.value = '10';
    groutWidthInput.value = '3';
    
    roomAreaText.innerHTML = '<span class="result-value">0 m²</span>';
    tilesText.innerHTML = '<span class="result-value">0</span>';
    tileCostText.innerHTML = '—';
    groutText.innerHTML = '<span class="result-value">0 kg</span>';
    adhesiveText.innerHTML = '<span class="result-value">0 kg</span>';
    flooringChart.data.datasets[0].data = [0, 0, 0];
    flooringChart.update();
}

// ==================== PAINT CALCULATOR FUNCTIONS ====================
function calculatePaint() {
    try {
        const length = parseFloat(paintLengthInput.value) || 0;
        const height = parseFloat(paintHeightInput.value) || 0;
        const doors = parseInt(doorsCountInput.value) || 0;
        const windows = parseInt(windowsCountInput.value) || 0;
        const coats = parseInt(coatsCountInput.value) || 1;
        const coverage = parseFloat(paintCoverageInput.value) || 12;
        const price = parseFloat(paintPriceInput.value) || 0;
        const wastage = parseFloat(paintWasteInput.value) || 0;

        // Convert to meters
        const unit = unitSystemSelect.value;
        const L = toMeters(length, unit);
        const H = toMeters(height, unit);

        // Calculate wall area
        const wallArea = L * H;
        
        // Subtract openings with accurate dimensions
        const doorArea = doors * 1.89; // Standard door: 2.1m × 0.9m = 1.89m²
        const windowArea = windows * 1.44; // Standard window: 1.2m × 1.2m = 1.44m²
        const paintableArea = (wallArea - doorArea - windowArea) * (1 + wastage/100);

        // Calculate paint required
        const paintLiters = (paintableArea / coverage) * coats;
        const paintCans = Math.ceil(paintLiters / 4);
        const totalCost = paintCans * 4 * price; // Cost based on actual liters used
        
        // Labor time estimate (more realistic: 1 hour per 8m² for quality work)
        const laborHours = Math.ceil(paintableArea / 8);

        // Display results
        paintAreaText.innerHTML = `<span class="result-value">${paintableArea.toFixed(2)} m²</span>`;
        paintLitersText.innerHTML = `<span class="result-value">${paintLiters.toFixed(1)} liters</span>`;
        paintCansText.innerHTML = `<span class="result-value">${paintCans} cans (4L)</span>`;
        paintCostText.innerHTML = `<span class="result-value">₹ ${totalCost.toLocaleString('en-IN')}</span>`;
        laborTimeText.innerHTML = `<span class="result-value">${laborHours} hours</span>`;

        // Update paint chart
        paintChart.data.datasets[0].data = [wallArea, doorArea, windowArea];
        paintChart.update();

    } catch (error) {
        console.error('Paint calculation error:', error);
        alert('Error in paint calculation. Please check your inputs.');
    }
}

function resetPaintCalculator() {
    paintLengthInput.value = '';
    paintHeightInput.value = '';
    doorsCountInput.value = '1';
    windowsCountInput.value = '2';
    coatsCountInput.value = '2';
    paintCoverageInput.value = '12';
    paintPriceInput.value = '250';
    paintWasteInput.value = '5';
    
    paintAreaText.innerHTML = '<span class="result-value">0 m²</span>';
    paintLitersText.innerHTML = '<span class="result-value">0 liters</span>';
    paintCansText.innerHTML = '<span class="result-value">0</span>';
    paintCostText.innerHTML = '—';
    laborTimeText.innerHTML = '—';
    paintChart.data.datasets[0].data = [0, 0, 0];
    paintChart.update();
}

// ==================== STEEL CALCULATOR FUNCTIONS ====================
function calculateSteel() {
    try {
        const structureType = steelStructureTypeSelect.value;
        const length = parseFloat(steelLengthInput.value) || 0;
        const width = parseFloat(steelWidthInput.value) || 0;
        const height = parseFloat(steelHeightInput.value) || 0;
        const barDiameter = parseFloat(barDiameterSelect.value) || 12;
        const barSpacing = parseFloat(barSpacingInput.value) || 150;
        const steelPrice = parseFloat(steelPriceInput.value) || 0;
        const wastage = parseFloat(steelWasteInput.value) || 0;

        // Convert to meters
        const unit = unitSystemSelect.value;
        const L = toMeters(length, unit);
        const W = toMeters(width, unit);
        const H = toMeters(height, unit);

        if (!L || !W || !H) {
            alert('Please enter all required dimensions');
            return;
        }

        let mainBars = 0, distBars = 0, stirrups = 0;
        let mainBarsLength = 0, distBarsLength = 0, stirrupLength = 0;
        let totalBarsLength = 0;
        let totalWeight = 0;

        // Calculate weight per meter of steel bar (standard formula: d²/162 kg/m)
        const weightPerMeter = (barDiameter * barDiameter) / 162;

        // Calculate development length as per IS 456 (47d for Fe415 steel in tension)
        const developmentLength = (47 * barDiameter) / 1000; // Convert to meters

        // Initialize all lengths to avoid undefined values
        mainBarsLength = 0;
        distBarsLength = 0;
        stirrupLength = 0;

        switch(structureType) {
            case 'slab':
                // Main bars along longer span
                mainBars = Math.ceil((W * 1000) / barSpacing) + 1;
                mainBarsLength = L + developmentLength;
                
                // Distribution bars along shorter span  
                distBars = Math.ceil((L * 1000) / barSpacing) + 1;
                distBarsLength = W + developmentLength;
                
                totalBarsLength = (mainBars * mainBarsLength) + (distBars * distBarsLength);
                totalWeight = totalBarsLength * weightPerMeter;
                break;

            case 'beam':
                // Main tension bars (typically 4 bars)
                mainBars = 4;
                mainBarsLength = L + (2 * developmentLength);
                
                // Stirrups calculation using user spacing
                const stirrupsCount = Math.ceil((L * 1000) / barSpacing) + 1;
                stirrups = stirrupsCount;
                stirrupLength = 2 * (W - 0.05) + 2 * (H - 0.05) + 0.30;
                
                totalBarsLength = (mainBars * mainBarsLength) + (stirrupsCount * stirrupLength);
                totalWeight = totalBarsLength * weightPerMeter;
                break;

            case 'column':
                // Vertical main bars (typically 8-12 bars depending on size)
                const columnBars = Math.max(8, Math.ceil((W * 1000) / 200));
                mainBars = columnBars;
                mainBarsLength = H + (2 * developmentLength);
                
                // Lateral ties/stirrups
                const tieSpacing = Math.min(150, 16 * barDiameter);
                const tiesCount = Math.ceil((H * 1000) / tieSpacing) + 1;
                stirrups = tiesCount;
                stirrupLength = 2 * (W - 0.05) + 2 * (H - 0.05) + 0.30;
                
                totalBarsLength = (mainBars * mainBarsLength) + (tiesCount * stirrupLength);
                totalWeight = totalBarsLength * weightPerMeter;
                break;

            case 'footing':
                // Main bars in both directions
                const barsBottomX = Math.ceil((W * 1000) / barSpacing) + 1;
                const barsBottomY = Math.ceil((L * 1000) / barSpacing) + 1;
                
                mainBars = barsBottomX;
                distBars = barsBottomY;
                mainBarsLength = L + developmentLength;
                distBarsLength = W + developmentLength;
                
                totalBarsLength = (barsBottomX * mainBarsLength) + (barsBottomY * distBarsLength);
                totalWeight = totalBarsLength * weightPerMeter;
                break;
        }

        // Apply wastage
        const wastageFactor = (1 + wastage / 100);
        totalWeight *= wastageFactor;
        
        // Calculate total bars count
        const totalBarsCount = mainBars + distBars + stirrups;
        
        // Calculate costs
        const totalCost = totalWeight * steelPrice;
        const concreteVolume = L * W * H;
        const steelPerCube = concreteVolume > 0 ? totalWeight / concreteVolume : 0;

        // Calculate weight distribution for chart (CORRECTED - no double wastage)
        const mainBarsWeight = (mainBars * mainBarsLength * weightPerMeter) * wastageFactor;
        const distBarsWeight = (distBars * distBarsLength * weightPerMeter) * wastageFactor;
        const stirrupsWeight = (stirrups * stirrupLength * weightPerMeter) * wastageFactor;

        // Display results
        steelWeightText.innerHTML = `<span class="result-value">${totalWeight.toFixed(1)} kg</span>`;
        barsCountText.innerHTML = `<span class="result-value">${totalBarsCount}</span>`;
        barsLengthText.innerHTML = `<span class="result-value">${totalBarsLength.toFixed(1)} m</span>`;
        steelCostText.innerHTML = `<span class="result-value">₹ ${totalCost.toLocaleString('en-IN')}</span>`;
        steelPerCubeText.innerHTML = `<span class="result-value">${steelPerCube.toFixed(1)} kg/m³</span>`;

        // Update steel chart - ensure we have valid numbers
        steelChart.data.datasets[0].data = [
            Math.max(0, mainBarsWeight),
            Math.max(0, distBarsWeight), 
            Math.max(0, stirrupsWeight)
        ];
        steelChart.update();

    } catch (error) {
        console.error('Steel calculation error:', error);
        alert('Error in steel calculation. Please check your inputs.');
    }
}

// ==================== EXCAVATION CALCULATOR FUNCTIONS ====================
function calculateExcavation() {
    try {
        const excavationType = excavationTypeSelect.value;
        const length = parseFloat(excLengthInput.value) || 0;
        const width = parseFloat(excWidthInput.value) || 0;
        const depth = parseFloat(excDepthInput.value) || 0;
        const soilType = soilTypeSelect.value;
        const truckCapacity = parseFloat(truckCapacityInput.value) || 0;
        const excavationRate = parseFloat(excavationRateInput.value) || 0;
        const transportRate = parseFloat(transportRateInput.value) || 0;

        if (!length || !width || !depth) {
            alert('Please enter all required dimensions');
            return;
        }

        // Convert to meters
        const unit = unitSystemSelect.value;
        const L = toMeters(length, unit);
        const W = toMeters(width, unit);
        const D = toMeters(depth, unit);

        // Calculate volume based on excavation type
        let volume = 0;
        switch(excavationType) {
            case 'trench':
                volume = L * W * D;
                break;
            case 'pit':
                volume = L * W * D;
                break;
            case 'slope':
                volume = L * W * D * 0.5; // Triangular prism
                break;
            case 'basement':
                volume = L * W * D * 1.1; // 10% extra for working space
                break;
        }

        // Calculate number of trucks (considering soil bulking factor)
        const bulkingFactor = soilType === 'rock' ? 1.5 : soilType === 'hard' ? 1.3 : 1.25;
        const looseVolume = volume * bulkingFactor;
        const trucksCount = Math.ceil(looseVolume / truckCapacity);

        // Calculate costs based on soil type
        let soilMultiplier = 1;
        switch(soilType) {
            case 'hard': soilMultiplier = 1.5; break;
            case 'rock': soilMultiplier = 2.5; break;
            case 'clay': soilMultiplier = 1.8; break;
        }

        const excavationCost = volume * excavationRate * soilMultiplier;
        const transportCost = looseVolume * transportRate;
        const laborCost = volume * 80; // ₹80 per m³ for labor (updated rate)
        const totalCost = excavationCost + transportCost + laborCost;

        // Display results
        excVolumeText.innerHTML = `<span class="result-value">${volume.toFixed(2)} m³</span>`;
        trucksCountText.innerHTML = `<span class="result-value">${trucksCount}</span>`;
        excCostText.innerHTML = `<span class="result-value">₹ ${excavationCost.toLocaleString('en-IN')}</span>`;
        transportCostText.innerHTML = `<span class="result-value">₹ ${transportCost.toLocaleString('en-IN')}</span>`;
        totalExcCostText.innerHTML = `<span class="result-value">₹ ${totalCost.toLocaleString('en-IN')}</span>`;

        // Update excavation chart
        excavationChart.data.datasets[0].data = [excavationCost, transportCost, laborCost];
        excavationChart.update();

    } catch (error) {
        console.error('Excavation calculation error:', error);
        alert('Error in excavation calculation. Please check your inputs.');
    }
}

function resetExcavationCalculator() {
    excLengthInput.value = '';
    excWidthInput.value = '';
    excDepthInput.value = '';
    truckCapacityInput.value = '6';
    excavationRateInput.value = '150';
    transportRateInput.value = '80';
    
    excVolumeText.innerHTML = '<span class="result-value">0 m³</span>';
    trucksCountText.innerHTML = '<span class="result-value">0</span>';
    excCostText.innerHTML = '—';
    transportCostText.innerHTML = '—';
    totalExcCostText.innerHTML = '—';
    excavationChart.data.datasets[0].data = [0, 0, 0];
    excavationChart.update();
}



// ==================== QUICK TOOLS FUNCTIONS ====================
function convertUnits() {
    const value = parseFloat(convertValueInput.value) || 0;
    const fromUnit = convertFromSelect.value;
    const toUnit = convertToSelect.value;
    
    const conversions = {
        'm': { 'cm': 100, 'mm': 1000, 'ft': 3.28084, 'in': 39.3701, 'm': 1 },
        'cm': { 'm': 0.01, 'mm': 10, 'ft': 0.0328084, 'in': 0.393701, 'cm': 1 },
        'mm': { 'm': 0.001, 'cm': 0.1, 'ft': 0.00328084, 'in': 0.0393701, 'mm': 1 },
        'ft': { 'm': 0.3048, 'cm': 30.48, 'mm': 304.8, 'in': 12, 'ft': 1 },
        'in': { 'm': 0.0254, 'cm': 2.54, 'mm': 25.4, 'ft': 0.0833333, 'in': 1 }
    };
    
    const result = value * (conversions[fromUnit][toUnit] || 1);
    conversionResult.innerHTML = `<span class="result-value">${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}</span>`;
}

function calculateArea() {
    const shape = shapeTypeSelect.value;
    const unit = unitSystemSelect.value;
    let area = 0;
    
    const length = parseFloat(areaLengthInput.value) || 0;
    const width = parseFloat(areaWidthInput.value) || 0;
    
    if (!length) {
        alert('Please enter required dimensions');
        return;
    }
    
    switch(shape) {
        case 'rectangle':
            if (!width) {
                alert('Please enter width for rectangle');
                return;
            }
            area = length * width;
            break;
        case 'triangle':
            if (!width) {
                alert('Please enter height for triangle');
                return;
            }
            area = 0.5 * length * width;
            break;
        case 'circle':
            area = Math.PI * Math.pow(length, 2);
            break;
    }
    
    // Convert area based on unit
    let convertedArea = area;
    let areaSuffix = ' m²';
    
    if (unit === 'cm') convertedArea = area * 10000;
    else if (unit === 'mm') convertedArea = area * 1000000;
    else if (unit === 'ft') convertedArea = area * 10.7639;
    else if (unit === 'in') convertedArea = area * 1550;
    
    areaResult.innerHTML = `<span class="result-value">Area: ${convertedArea.toFixed(2)}${areaSuffix}</span>`;
}

function updateAreaInputs() {
    const shape = shapeTypeSelect.value;
    const areaInputs = document.getElementById('areaInputs');
    
    switch(shape) {
        case 'rectangle':
            areaInputs.innerHTML = `
                <input type="number" id="areaLength" placeholder="Length" value="5" step="0.01">
                <input type="number" id="areaWidth" placeholder="Width" value="3" step="0.01">
            `;
            break;
        case 'triangle':
            areaInputs.innerHTML = `
                <input type="number" id="areaLength" placeholder="Base" value="4" step="0.01">
                <input type="number" id="areaWidth" placeholder="Height" value="3" step="0.01">
            `;
            break;
        case 'circle':
            areaInputs.innerHTML = `
                <input type="number" id="areaLength" placeholder="Radius" value="2" step="0.01">
                <input type="number" id="areaWidth" placeholder="" style="visibility: hidden;">
            `;
            break;
    }
}

// ==================== EVENT LISTENERS ====================
// Tab switching
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Update active tab button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Show active tab content
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});

// Unit system change
unitSystemSelect.addEventListener('change', () => {
    updateUnitLabels();
    generateStructureInputs(structureTypeSelect.value);
});

// Structure type change
structureTypeSelect.addEventListener('change', () => {
    generateStructureInputs(structureTypeSelect.value);
});

// Shape type change for area calculator
shapeTypeSelect.addEventListener('change', updateAreaInputs);

// Event delegation for all calculator buttons
document.addEventListener('click', function(e) {
    // Concrete calculator
    if (e.target && e.target.id === 'calcBtn') {
        calculateConcrete();
    }
    
    if (e.target && e.target.id === 'resetBtn') {
        resetConcreteCalculator();
    }

    // Brickwork calculator
    if (e.target && e.target.id === 'brickCalcBtn') {
        calculateBrickwork();
    }
    
    if (e.target && e.target.id === 'brickResetBtn') {
        resetBrickworkCalculator();
    }

    // Plaster calculator
    if (e.target && e.target.id === 'plasterCalcBtn') {
        calculatePlaster();
    }
    
    if (e.target && e.target.id === 'plasterResetBtn') {
        resetPlasterCalculator();
    }

    // Flooring calculator
    if (e.target && e.target.id === 'floorCalcBtn') {
        calculateFlooring();
    }
    
    if (e.target && e.target.id === 'floorResetBtn') {
        resetFlooringCalculator();
    }

    // Paint calculator
    if (e.target && e.target.id === 'paintCalcBtn') {
        calculatePaint();
    }
    
    if (e.target && e.target.id === 'paintResetBtn') {
        resetPaintCalculator();
    }

    // Steel calculator
    if (e.target && e.target.id === 'steelCalcBtn') {
        calculateSteel();
    }
    
    if (e.target && e.target.id === 'steelResetBtn') {
        resetSteelCalculator();
    }

    // Excavation calculator
    if (e.target && e.target.id === 'excCalcBtn') {
        calculateExcavation();
    }
    
    if (e.target && e.target.id === 'excResetBtn') {
        resetExcavationCalculator();
    }

    // Quick tools
    if (e.target && e.target.id === 'convertBtn') {
        convertUnits();
    }

    if (e.target && e.target.id === 'areaCalcBtn') {
        calculateArea();
    }
	
});

// Header and Footer functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Export PDF functionality
    const exportBtn = document.querySelector('.btn-secondary');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            const results = {
                volume: document.getElementById('volText').textContent,
                cement: document.getElementById('cementText').textContent,
                sand: document.getElementById('sandText').textContent,
                aggregate: document.getElementById('aggText').textContent,
                cost: document.getElementById('costText').textContent
            };
            
            alert('PDF Export functionality would generate a report with:\n\n' +
                  `Volume: ${results.volume}\n` +
                  `Cement: ${results.cement}\n` +
                  `Sand: ${results.sand}\n` +
                  `Aggregate: ${results.aggregate}\n` +
                  `Cost: ${results.cost}\n\n` +
                  'In a real implementation, this would download a PDF file.');
        });
    }
});

// ==================== INITIALIZATION ====================
// Initialize the application
function initApp() {
    initializeCharts();
    updateUnitLabels();
    generateStructureInputs('slab');
    updateAreaInputs();
    
    // Set default units for all individual unit selectors
    document.querySelectorAll('.unit-selector-small').forEach(selector => {
        selector.value = unitSystemSelect.value;
    });
}

// ==================== SOLAR ROOFTOP CALCULATOR ====================
const solarAreaInput = document.getElementById('solarArea');
const panelWattInput = document.getElementById('panelWatt');
const efficiencyInput = document.getElementById('efficiency');
const sunlightInput = document.getElementById('sunlight');
const solarPowerText = document.getElementById('solarPowerText');
const solarEnergyText = document.getElementById('solarEnergyText');
const solarSavingsText = document.getElementById('solarSavingsText');

document.getElementById('solarCalcBtn').onclick = function() {
  const area = parseFloat(solarAreaInput.value);
  const panelWatt = parseFloat(panelWattInput.value);
  const eff = parseFloat(efficiencyInput.value) / 100;
  const hours = parseFloat(sunlightInput.value);

  if (area > 0 && panelWatt > 0 && eff > 0 && hours > 0) {
    const totalPower = (area * panelWatt * eff) / 1000; // kW
    const dailyEnergy = totalPower * hours; // kWh/day
    const savings = dailyEnergy * 8; // ₹8 per kWh

    solarPowerText.innerText = totalPower.toFixed(2) + " kW";
    solarEnergyText.innerText = dailyEnergy.toFixed(2) + " kWh/day";
    solarSavingsText.innerText = "₹" + savings.toFixed(2) + " /day";
  } else {
    solarPowerText.innerText = "—";
    solarEnergyText.innerText = "—";
    solarSavingsText.innerText = "—";
  }
};

document.getElementById('solarResetBtn').onclick = function() {
  solarAreaInput.value = 100;
  panelWattInput.value = 350;
  efficiencyInput.value = 18;
  sunlightInput.value = 5;
  solarPowerText.innerText = "—";
  solarEnergyText.innerText = "—";
  solarSavingsText.innerText = "—";
};


// ==================== WATER TANK CALCULATOR ====================
const tankLengthInput = document.getElementById('tankLength');
const tankWidthInput = document.getElementById('tankWidth');
const tankDepthInput = document.getElementById('tankDepth');
const tankVolumeText = document.getElementById('tankVolumeText');
const tankCapacityText = document.getElementById('tankCapacityText');
const tankVolumeFtText = document.getElementById('tankVolumeFtText');

document.getElementById('tankCalcBtn').onclick = function() {
  const length = parseFloat(tankLengthInput.value);
  const width = parseFloat(tankWidthInput.value);
  const depth = parseFloat(tankDepthInput.value);

  if (length > 0 && width > 0 && depth > 0) {
    const volumeM3 = length * width * depth;
    const volumeFt3 = volumeM3 * 35.315; // 1 m³ = 35.315 ft³
    const capacityLiters = volumeM3 * 1000;

    tankVolumeText.innerText = volumeM3.toFixed(2) + " m³";
    tankVolumeFtText.innerText = volumeFt3.toFixed(2) + " ft³";
    tankCapacityText.innerText = capacityLiters.toFixed(2) + " liters";
  } else {
    tankVolumeText.innerText = "—";
    tankCapacityText.innerText = "—";
    tankVolumeFtText.innerText = "—";
  }
};

document.getElementById('tankResetBtn').onclick = function() {
  tankLengthInput.value = 12;
  tankWidthInput.value = 9;
  tankDepthInput.value = 15;
  tankVolumeText.innerText = "—";
  tankCapacityText.innerText = "—";
  tankVolumeFtText.innerText = "—";
};



// ==================== ROOFING CALCULATOR ====================


const roofRiseInput = document.getElementById('roofRise');   // rise (vertical height)
const roofRunInput = document.getElementById('roofRun');     // run (horizontal span)
const roofPitchText = document.getElementById('roofPitchText');
const roofSlopeText = document.getElementById('roofSlopeText');
const roofAngleText = document.getElementById('roofAngleText');

document.getElementById('roofCalcBtn').onclick = function() {
  const rise = parseFloat(roofRiseInput.value);
  const run = parseFloat(roofRunInput.value);

  if (rise > 0 && run > 0) {
    const pitch = rise / (run / 12);
    const slope = (rise / run) * 100;
    const angle = Math.atan(rise / run) * (180 / Math.PI);

    roofPitchText.innerText = pitch.toFixed(2) + " / 12";
    roofSlopeText.innerText = slope.toFixed(2) + " %";
    roofAngleText.innerText = angle.toFixed(2) + "°";
  } else {
    roofPitchText.innerText = "—";
    roofSlopeText.innerText = "—";
    roofAngleText.innerText = "—";
  }
};

document.getElementById('roofResetBtn').onclick = function() {
  roofRiseInput.value = 10;
  roofRunInput.value = 15;
  roofPitchText.innerText = "—";
  roofSlopeText.innerText = "—";
  roofAngleText.innerText = "—";
};


// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}




  document.getElementById("exportPDF").addEventListener("click", async () => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "pt", "a4");

    const element = document.querySelector(".results"); // or your specific result container

    // Capture as canvas
    await html2canvas(element, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 595.28;
      const pageHeight = 841.89;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("ConstructCalcPro_Calculation.pdf");
    });
  });
