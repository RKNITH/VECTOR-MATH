function calculateProducts() {
    const vector1 = document.getElementById("vector1").value.split(',').map(Number);
    const vector2 = document.getElementById("vector2").value.split(',').map(Number);

    const dotProduct = vector1[0] * vector2[0] + vector1[1] * vector2[1] + vector1[2] * vector2[2];

    const crossProduct = [
        vector1[1] * vector2[2] - vector1[2] * vector2[1],
        vector1[2] * vector2[0] - vector1[0] * vector2[2],
        vector1[0] * vector2[1] - vector1[1] * vector2[0]
    ];

    document.getElementById("product-result").innerText = `Dot Product: ${dotProduct}\nCross Product: [${crossProduct.join(', ')}]`;
}

function calculateScalarTripleProduct() {
    const vectorA = document.getElementById("vectorA").value.split(',').map(Number);
    const vectorB = document.getElementById("vectorB").value.split(',').map(Number);
    const vectorC = document.getElementById("vectorC").value.split(',').map(Number);

    const crossProduct = [
        vectorB[1] * vectorC[2] - vectorB[2] * vectorC[1],
        vectorB[2] * vectorC[0] - vectorB[0] * vectorC[2],
        vectorB[0] * vectorC[1] - vectorB[1] * vectorC[0]
    ];

    const scalarTripleProduct = vectorA[0] * crossProduct[0] + vectorA[1] * crossProduct[1] + vectorA[2] * crossProduct[2];

    document.getElementById("scalar-triple-result").innerText = `Scalar Triple Product: ${scalarTripleProduct}`;
}

function calculateReciprocal() {
    const vectorA = document.getElementById("vector-a").value.split(',').map(Number);
    const vectorB = document.getElementById("vector-b").value.split(',').map(Number);
    const vectorC = document.getElementById("vector-c").value.split(',').map(Number);

    // Calculate the volume V of the parallelepiped
    const V = vectorA[0] * (vectorB[1] * vectorC[2] - vectorB[2] * vectorC[1]) -
        vectorA[1] * (vectorB[0] * vectorC[2] - vectorB[2] * vectorC[0]) +
        vectorA[2] * (vectorB[0] * vectorC[1] - vectorB[1] * vectorC[0]);

    // Calculate reciprocal vectors α, β, γ
    const alpha = [
        (vectorB[1] * vectorC[2] - vectorB[2] * vectorC[1]) / V,
        (vectorB[2] * vectorC[0] - vectorB[0] * vectorC[2]) / V,
        (vectorB[0] * vectorC[1] - vectorB[1] * vectorC[0]) / V
    ];

    const beta = [
        (vectorC[1] * vectorA[2] - vectorC[2] * vectorA[1]) / V,
        (vectorC[2] * vectorA[0] - vectorC[0] * vectorA[2]) / V,
        (vectorC[0] * vectorA[1] - vectorC[1] * vectorA[0]) / V
    ];

    const gamma = [
        (vectorA[1] * vectorB[2] - vectorA[2] * vectorB[1]) / V,
        (vectorA[2] * vectorB[0] - vectorA[0] * vectorB[2]) / V,
        (vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0]) / V
    ];

    document.getElementById("reciprocal-result").innerHTML = `
        <p>Reciprocal Vector α: [${alpha.join(', ')}]</p>
        <p>Reciprocal Vector β: [${beta.join(', ')}]</p>
        <p>Reciprocal Vector γ: [${gamma.join(', ')}]</p>
    `;
}

