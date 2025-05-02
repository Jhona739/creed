const botones = document.getElementsByClassName("person__autor");
const fondo = document.getElementById("fondo");
const parrafo = document.getElementById("parrafo");
const logo = document.getElementById("logo");
const linkbutton = document.getElementById("linkbutton");

const textos = [
    {imagen: 'img/fondo-valhalla.jpg', parrafo: 'Conviértete en Eivor, un poderoso saqueador vikingo y lidera a tu clan desde las inclementes costas de Noruega a un nuevo hogar en medio de las exuberantes tierras de cultivo de la Inglaterra del siglo IX. Explora un hermoso y misterioso mundo abierto donde te enfrentarás a brutales enemigos.', logo: 'img/logo-valhalla.png', linkbutton: 'https://www.ubisoft.com/es-mx/game/assassins-creed/valhalla'},
    {imagen: 'img/fondo-altair.jpg',  parrafo: 'Altaïr se crió en la fortaleza de los Asesinos en Masyaf, y poseía increíbles habilidades, aumentando rápidamente entre las filas de la Orden. Una persona fría y objetiva, que se dedicó plenamente a la causa que eligió seguir. Altaïr tenía un carácter rebelde, era impetuoso, confiado, exigente, arrogante, egoísta e impaciente.', logo: 'img/logo-altair.png', linkbutton: 'https://www.ubisoft.com/es-es/game/assassins-creed/assassins-creed'},
    {imagen: 'img/fondo-connor.jpg', parrafo: 'Ratonhnhakéton (nacido en 1756), también conocido por el nombre adoptado de Connor, fue un Maestro Asesino de la Hermandad Colonial nacido en Kanien keháka durante el período de la Guerra de Independencia de los Estados Unidos.', logo: 'img/logo-connor.png', linkbutton: 'https://www.ubisoft.com/es-mx/game/assassins-creed/assassins-creed-3-remastered'},
    {imagen: 'img/fondo-edwart.jpg', parrafo: 'Edward James Kenway (1693 - 1735) fue un corsario galés que se dedicó a la piratería durante la edad dorada de la misma, y después de su retiro fue un miembro de la Orden de los Asesinos. Natal de Swansea, Kenway se mudó a Bristol en Inglaterra siendo muy joven, y conoció allí a la hija de un poderoso mercader, Caroline Scott.', logo: 'img/logo-valhalla.jpg', linkbutton: 'https://www.ubisoft.com/es-mx/game/assassins-creed/valhalla'},
    {imagen: 'img/fondo-arnor.jpg',  parrafo: 'Arno Víctor Dorian (1768 - desconocido) fue un miembro franco-austriaco de la Hermandad de los Asesinos de París, activo durante el tiempo de la Revolución Francesa. Él es un antepasado de Callum Lynch. Él es el único hijo conocido del Asesino Charles Dorian, quien fue asesinado por Shay Cormac.', logo: 'img/logo-valhalla.jpg', linkbutton: 'https://www.ubisoft.com/es-mx/game/assassins-creed/valhalla'},
    {imagen: 'img/fondo-jacob-frye-y-evie-frye.jpg', parrafo: 'Jacob Frye fue un lider Asesino durante la era victoriana en Inglaterra. Junto a su hermana Evie, lideró a los Rooks, una banda criminal afiliada a los Asesinos Británicos, la cual usaba para combatir opresores del proletariado.', logo: 'img/logo-valhalla.jpg', linkbutton: 'https://www.ubisoft.com/es-mx/game/assassins-creed/valhalla'},
    {imagen: 'img/fondo-primera.jpg', titulo: 'ENZIO <br> ME LA CHUPA', parrafo: 'ENZIO <br> ME LA CHUPA', logo: 'img/logo-valhalla.jpg', linkbutton: 'https://www.ubisoft.com/es-mx/game/assassins-creed/valhalla'},
    {imagen: 'img/fondo-primera.jpg', titulo: 'ENZIO <br> ME LA CHUPA', parrafo: 'ENZIO <br> ME LA CHUPA', logo: 'img/logo-valhalla.jpg', linkbutton: 'https://www.ubisoft.com/es-mx/game/assassins-creed/valhalla'},
    {imagen: 'img/fondo-primera.jpg', titulo: 'ENZIO <br> ME LA CHUPA', parrafo: 'ENZIO <br> ME LA CHUPA', logo: 'img/logo-valhalla.jpg', linkbutton: 'https://www.ubisoft.com/es-mx/game/assassins-creed/valhalla'},
    {imagen: 'img/fondo-primera.jpg', titulo: 'ENZIO <br> ME LA CHUPA', parrafo: 'ENZIO <br> ME LA CHUPA', logo: 'img/logo-valhalla.jpg', linkbutton: 'https://www.ubisoft.com/es-mx/game/assassins-creed/valhalla'}
];

for (let i = 0; i < textos.length; i++) {
    botones[i].addEventListener('click', () => {
        // Cambiar el fondo de la página
        parrafo.innerHTML = textos[i].parrafo;
        fondo.style.backgroundImage = `url("${textos[i].imagen}")`;
        logo.src = logo.src = textos[i].logo;
        linkbutton.setAttribute("href", textos[i].linkbutton);

        // Añadir la clase 'selected' al botón para resaltar
        for (let j = 0; j < botones.length; j++) {
            botones[j].classList.remove('selected');  // Elimina la clase de otros botones
        }
        botones[i].classList.add('selected');  // Añade la clase al botón clickeado

        // Hacer zoom en el fondo cuando se hace clic en el botón
        fondo.style.transform = 'scale(1.03)';  // Hacer zoom

        // Después de un tiempo, restaurar el fondo a su tamaño original
        setTimeout(() => {
            fondo.style.transform = 'scale(1)';  // Volver al tamaño original
        }, 350);  // El tiempo de espera es de 500ms (puedes ajustar este valor)
    });
}
