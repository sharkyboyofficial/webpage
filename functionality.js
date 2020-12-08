var listofstring = [
    "Hola natalia preciosa, ven aqui q t como a besos idiota",
    "Che hermosa, me encantas alch",
    "Ya nos besamos o se t aguada?",
    "Me estas haciendo esperar mucho",
    "Ey ey, no me desvies la mirada me encantan esos ojos que me miran con cariño",
    "t amo my lof",
    "Que mas quieres q diga wey? Ya no hay mas",
    "Si clickeaste otra vez, ME ENCANTAS MORRA HERMOSA",
    "AHHHHH HAZME TUYO, ENGENDRA A MIS HIJOS OSEA NMMMSSSSSSSSS ME ENCANTAAAAAAAS",
    "GRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
    "AHHHH COMO PERRAS ME ENCANTAS",
    "y se que no soy el mejor, pero lo intento sabes? trato de ser la mejor version d mi mismo para q tu la veas",
    "y si, puede q sea celoso y mas pero mas por el miedo d q me sean infiel y verte como las demas o cualquier mamada q tu pienses",
    "es mi miedo a perderte... ese miedo d perder a la personas q porfin me hizo entender q las cosas pasan, las heridas cicatrizan y todo sigue",
    "tu eres la persona q me quito el miedo a intentar otra vez y wow, no me arrepiento en nada",
    "y si volviera al pasado no haria las cosas de manera diferente pq todo lo que hicimos, nos digimos, nos trajo hasta aqui",
    "un futuro donde tu y yo somos felices, donde nos vamos a casar y vamos a tener muchos hijos",
    "uno donde mis ojos solo son para ti, y ahora si que como dice la cancion",
    '"si 3 vidas yo tuviera, pq t lo mereces t escogeria a la primera", y alch t escogeria en todas',
    "pq tu, tu me haces sentir q lo tengo todo en una sola persona y puede q no sea al reves, puede q tu sientas un pequeño vacio",
    "pero solo quiero q sepas q no necesariamente lo tienes q llenar, dejame llenarlo aun mas :b",
    "pero bueno, esto ahora si es todo, jaja",
    "que no se t olvide q t amo pendejete"
];
var count = 0;

document.addEventListener("click", function() {
    document.getElementById("Texto").innerHTML = listofstring[count];
    count += 1;

    if ( count == 22 ) {
        count = 0;
    }
})