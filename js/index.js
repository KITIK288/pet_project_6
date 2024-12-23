function calculate() {

    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;

    dis = b * b - 4 * a * c;
    dis_root = Math.sqrt(dis);

    x1 = (dis_root + (-b)) / (2 * a);
    x2 = (dis_root - (-b)) / (2 * a);

    document.getElementById('x1').innerText = `x1 = ${x1}`;
    document.getElementById('x2').innerText = `x2 = ${x2}`;
}
