# Bowl the hell out of it
## Equipo de desarrollo:

Alejandro de Haro Morales —> carta Hades

Adán Calvo Durán —> carta Loro Pirata

Javier de Sala Rodríguez —> carta Inframundo

Diego García Alonso —> carta Animal Crossing

###### Fecha de la última actualización --> 24/09/2026

1 Descripción general....................   .................................................................................2

1.1 Concepto...............................................................................................................2

1.2 Género.................................................................................................................. 3

1.3 Setting................................................................................................................... 3

1.4 Características principales.................................................................................... 4

2 Gameplay...................................................................................................................... 4

2.1 Objetivo del juego..................................................................................................4

2.2 Core loops.............................................................................................................4

3 Personaje jugador........................................................................................................4

3.1 Métricas.................................................................................................................4

3.2 Controles...............................................................................................................5

4 Mecánicas..................................................................................................................... 5

4.1 Movimiento del boliche..........................................................................................5

4.2 Movimiento del boliche..........................................................................................5

4.3 Movimiento del boliche..........................................................................................5

4.4 Movimiento del boliche..........................................................................................5

4.5 Movimiento del boliche..........................................................................................5

5 Mundo del juego...........................................................................................................5

5.1 Personajes............................................................................................................ 5

5.2 Objetos..................................................................................................................6

5.3 Obstáculos............................................................................................................ 6

5.4 Niveles...................................................................................................................6

6 Interfaz.......................................................................................................................... 6

6.1 Cámara..................................................................................................................6

6.2 HUD.......................................................................................................................6

6.3 Menús....................................................................................................................6

7 Experiencia de Juego.................................................................................................. 7

8 Dinámicas..................................................................................................................... 7

9 Estética y contenido.................................................................................................... 7

10 Referencias.....................................................................................................................7

# 1 Descripción general
## 1.1 Concepto

Es un juego donde el jugador lanza una bola de bolos por una pista dinámica llena de
obstáculos y, al llegar al final de esta, debe derribar el máximo número de bolos posibles. El
número de bolos que derribe le servirá para simultáneamente debilitar a demonios con el
objetivo de derrotarlos a todos y escapar del infierno.

1.2 Género
Es un juego de género rogue-lite y bowling. Está orientado a un público que gusta de
estrategia y de habilidad mecánica.
1.3 Setting
Tras una bolista, Petra, hacer trampas en la final de una competición de bolos, es
condenada al infierno de los bolos. Ahí, deberá pagar su castigo lanzando bolas de bolos
que tendrán que recorrer una pista llena de obstáculos hasta impactar en los bolos que se
encontrarán al final de esta. Los bolos que Petra derribe le ayudarán a derrotar a los
diferentes habitantes del infierno y al propio diablo para tener la oportunidad de regresar.
1.4 Características principales
- Derrotar enemigos cada vez más fuertes hasta llegar al jefe final
- Mejorar tu build mediante elecciones de equipamiento
- Dominar poco a poco la mecánica de los bolos para ser más fuerte en el combate
2 Gameplay
2.1 Objetivo del juego
El principal objetivo es llegar hasta el nivel final del juego y derrotar al diablo… Lo que
significa que para lograrlo hay que superar múltiples niveles con enemigos de todo tipo
aprendiendo a lidiar con cada situación con tus herramientas.
Para superar un nivel tendrás que vencer enemigos y para cada ataque tendrás que
conseguir derribar unos bolos lanzando la bola por la pista que cambia dinámicamente en
función de los enemigos del encuentro. Si el jugador se queda sin bolas y no ha logrado
superar la puntuación propuesta, perderá la partida.
2.2 Core loops
El bucle de juego consiste en entrar en combate, jugar a los bolos para atacar y derrotar a
los enemigos y luego llegar a una tienda y conseguir mejoras antes de llegar al siguiente
enfrentamiento.
3 Personaje jugador
El personaje principal de nuestro juego es Petra. Petra deberá escapar del infierno de los
bolos para volver al mundo real, pero no será nada fácil, ya que deberá derrotar a los
diferentes habitantes del infierno y al propio diablo para tener la oportunidad de regresar.
3.1 Personajes jugables
Nombre Pasivas Bola inicial
Petra ‘la starter’ (personaje
inicial)
Petra tiene la posibilidad de
hacer un reroll cada vez en
la tienda y las
probabilidades de aparición
de los objetos serán
estándar.
Bola base
Goliath ‘el tirador pesado’
(personaje desbloqueable)
Costo: 50 pines de azufre
Los obstáculos de piedra
reducen en un 50% su
efecto en la bola al impactar
contra ellos. Tiene un 30%
más de probabilidad de
encontrarse Bolas Pesadas
y Pin Misil en la tienda
Bola gulosa
Mammon ‘el codicioso’
(personaje desbloqueable)
Costo: 75 pines de azufre
Comienza cada partida con
3 monedas (este número lo
podemos cambiar más
adelante) y aumenta al 50%
la probabilidad de rebaja en
la tienda. Además de un
30% de probabilidad
adicional de que aparezcan
pines de diamante.
Bola codiciosa
Azazel ‘el piromántico’
(personaje desbloqueable)
Costo: 100 pines de azufre
Cada primera bola en un set
es inmune a los efectos del
magma. En la tienda, tiene
una probabilidad del 30% de
encontrar bolas con aura,
especialmente las bolas de
ira y lujuria.
Bola irascible
3.2 Métricas
La pantalla se divide horizontalmente en mitad y mitad. La superior es una vista en perfil de
la protagonista en la izquierda y los enemigos a la derecha. La inferior es una vista
top-down de la pista de bolos para que el jugador pueda observar por completo la pista.
El movimiento de la bola es continuo y tiene la capacidad de moverse a lo largo de la pista
entera, acotada por esta misma. El jugador no dispone de movimiento y se queda fijo en su
posición en pantalla.
Cada bola de bolos contará con estadísticas como su velocidad de disparo, velocidad en los
medidores de lanzamiento y su puntuación por bolo.
3.3 Controles
Acción Control
Navegación por menús
Lanzamiento de bolos Ratón y click / barra espaciadora
Adelantar Diálogo
4 Mecánicas
4.1 Lanzamiento del boliche
La bola se lanzará mediante un sistema en dos partes: primero se dibuja una flecha desde
la bola con orientación hacia los bolos. Esta flecha oscila repetidamente en un cono
enfrente de la bola orientado hacia la pista y lo que el jugador debe de hacer es dar click
para parar su movimiento, lo que define la dirección del lanzamiento. Tras esto un medidor
integrado en la flecha se llena y vacía repetidamente hasta que el jugador hace click, lo cual
define la fuerza del disparo. Después, la bola será lanzada y se perderá el control sobre
ella.
El jugador siempre empieza con x boliches base y a estos se le añaden los otros que haya
desbloqueado.
Cuando una bola de bolos se pare completamente o sale de la pantalla por el lado de los
bolos (ya sea tras golpearlo o deslizándose por el gutter) la bola desaparece y el tiro
terminará y pasaremos a la siguiente bola del riel hasta quedarnos sin bolas.
Parámetro Descripción Unidad
Velocidad de disparo Magnitud que expresa el
espacio recorrido en una
unidad de tiempo y se
establece en el momento
en el que la bola es lanzada
m/s
Oscilación de la flecha Movimiento repetido de un
medio o sistema en torno a
una posición central o de
equilibrio a lo largo del
tiempo
Amplitud (m)
Periodo (s)
Llenado/vaciado de la flecha velocidad lineal a la cual el
medidor gana o pierde
unidades
Unidades genéricas/s
Medidor de la flecha capacidad total del medidor Unidad genérica
4.2 Modificaciones en la pista
La pista se subdivide en una cuadrícula, dentro de la cuadrícula puede haber todo tipo de
obstáculos.
Obstáculos o efectos en casillas singulares.
- Rocas: Obstruyen el camino para el jugador y le obligan a esquivarlas. En caso de
que una bola impacte contra una roca, ésta se frena un montón y rebotará, en caso
de que sea una bola pesada la roca será destrozada sin causarle nada a la bola. Las
rocas también pueden ser afectadas por efectos del aura de algunas bolas.
- Magma: Si la bola pasa por encima del magma, incinera los primeros bolos que esta
toca. Esto hace que no cuenten hacia la puntuación del tiro. La cantidad de bolos
incinerados dependerá de cuánto peso tenga la bola, a mayor peso más bolos
incinerados, con bolas pesadas pudiendo llegar a quemar 5 bolos.
- Barra de fuego: Una línea de fuego que gira fijada a un eje. Si la bola toca el fuego,
se quema y el lanzamiento es anulado
- Arena de almas: Cubre una zona de la pista la cual aumenta la fricción de la bola
con la pista haciendo que esta frene más rápido, el aumento de fricción es
proporcional al peso de la bola, con un aumento de la fricción del 20% para bolas
ligeras, 40% para bolas de peso medio y 60% para bolas pesadas.
- Vacío de aura: Una casilla que solo puede ser evitada por la bola con aura perezosa,
si una bola toca esta casilla la siguiente perderá su aura volviéndola una bola base,
tras ser tocada esta casilla desaparecerá hasta el siguiente set donde reaparece,
además no tiene colisión por lo que las bolas la atraviesan.
Efectos globales de toda la pista.
- Cambio de forma: En la presencia de algunos enemigos la pista podrá cambiar de
forma, desde alargarse hasta tener giros.
- Canales o gutters: La pista tendrá a sus laterales unos canales donde la bola podrá
caer terminando con el tiro instantáneamente.
- Barreras: En caso de que no haya un enemigo que active los gutters, la pista contará
con paredes o barreras en sus laterales para permitir el rebote de la bola contra
estas.
- Viento: En toda la pista hay una corriente de aire que puede acelerar o desacelerar
la bola más allá de desviarla, el viento en diferentes zonas de la pista tendrá
sentidos distintos, el viento afectará más o menos dependiendo del peso de la bola y
tamaño.
4.3 Puntuación
Viene dada por el número de bolos que tiremos. Disponemos de dos tiros para derribar el
máximo número de bolos posibles, en nuestro caso 10, antes de que se recoloquen todos,
esto es conocido como un set.
Tipo de tiro Descripción Puntuación otorgada
Tiro normal Todavía quedan bolos en
pie después de usar los dos
lanzamientos.
Puntuación: Bolos
derribados x multiplicador
de la bola*
Efecto: Ninguno, no hay
bonus acumulativo
Semi-pleno Se derriban los diez bolos
usando los dos
lanzamientos del set.
Puntuación: 10 x
multiplicador de la bola
Efecto: La puntuación del
siguiente set será duplicada
Pleno Se derriban los diez bolos
de la pista en una sola
tirada
Puntuación: 10 x
multiplicador de la bola
Efecto: Pasamos
directamente al siguiente
set evitando gastar otra
bola, además la puntuación
del siguiente set estará
multiplicada por 2,5
*En caso de hacer un pleno o semipleno y justo quedarte sin bolas recibirás una bola extra normal
para hacer uso del multiplicador de puntuación, con esta bola no contarán plenos o semiplenos para
evitar bolas infinitas.
multiplicador de la bola* → Cada bola dispone de una estadística de puntuación inherente
que se multiplica al número de pines que tires.
4.4 Obtención
Al finalizar una partida (da igual si se gana o se pierde), el jugador accede a una pantalla
donde su progreso en partida se convierte en pines de azufre. Estos pines le servirán al
jugador para comprar y desbloquear nuevos personajes en la tienda del menú principal.
Conversión de puntuación: 1 pin de azufre cada 100 puntos en partida.
Además, por cada semipleno logrado, se sumará un pin de azufre y por cada pleno 3.
Si derrotamos a un miniboss (ej: caracol inmortal) obtendremos 5 pines de azufre, y si nos
pasamos un nivel completo, 10 pines.
4.5 Equipamiento
Todo equipamiento viene dado por bolas o pines con efectos variados. En el caso de los
pines, uno de los 10 pines será reemplazado al azar por aquel con efecto especial, y los
pines no pueden tener más de un efecto al mismo tiempo.
Las bolas están limitadas a la capacidad del rail de bolas y cuentan con un tamaño, un peso
y su aura.
4.5.1 Variaciones de bolas básicas
*Generalmente el peso y el tamaño son proporcionales
● Tamaño: las bolas pueden ser medianas con un tamaño de 1 unidad, pequeñas con
un tamaño de 0.75 unidad y grandes con un tamaño de 1.33 de unidad.
● Peso: las bolas pueden tener un peso mediano con el cual las interacciones serán
neutras, un peso ligero donde algunas interacciones son favorables y otras
desventajosas y un peso pesado con el cual las interacciones ventajosas y negativas
cambian, los cambios son mencionados en las secciones de obstáculos.
4.5.2 Tipos de bolas según sus auras.
● Bola base: La primera bola de la que dispondremos en el gameplay. No tiene ningún
efecto adicional.
● Bola soberbia: Actúa en todas sus características como la bola normal, solo que al
derribar un bolo, su puntuación se multiplica por un valor aleatorio entre 0.5 y 3.5.
● Bola codiciosa: Si no consigues derribar un bolo, la siguiente bola del carril
desaparecerá, en caso de derribar los bolos, por cada bolo derribado tienes un 10%
de recibir una bola extra que copiará el efecto de alguna de las bolas que tengas en
tu inventario.
● Bola perezosa: Esta bola se volverá intangible por un tiempo tras entrar en contacto
con un obstáculo, en este estado no será afectada por obstáculos y los podrá
atravesar (en caso de llegar a los pines siendo intangible esta podría atravesarlos y
pasar sin derribarlos)
● Bola envidiosa: Según la cantidad de bolos que esta bola derribe, la cantidad en su
totalidad se añade a tu puntuación y la mitad (redondeando hacia arriba) se le resta
al contrincante
● Bola Irascible: Al entrar en contacto con un bolo, explota y derriba todos los bolos en
una pequeña área de efecto, además en caso de impactar contra un obstáculo que
no pueda atravesar esta explotará destruyendo el obstáculo.
● Bola gulosa: Esta bola automáticamente se vuelve pesada teniendo los efectos de
ser pesada, y tras ser lanzada crecerá a lo largo de la pista hasta tener un tamaño
equivalente al doble de su tamaño original.
● Bola lujuriosa: Esta bola tras ser lanzada esperará un tiempo y tras esto se acelerará
y dejará un rastro por un instante en el que las futuras bolas también se acelerarán.
4.5.3 Tipos de Pines
● Pin común: El primer pin del cual dispondremos en el gameplay. No tiene ningún
efecto adicional.
● Pin dorado: Derribar este pin cuenta el triple que derribar uno común
● Pin clonador: Cada set en el cual derribes este pin, su valor incrementa en 1
● Pin misil: Al derribar este pin, automáticamente derriba otro pin al azar que haya
quedado en pie tras el lanzamiento. No tiene efecto si el jugador hace un pleno
● Pintryoshka: Añade 1 pin extra a la puntuación por cada otro pin que haya sido tirado
en ese lanzamiento, con un máximo de 5
● Pin de diamante: Por cada set en el cual derribes este pin se te otorgará 1 moneda
más al final del nivel, con un máximo de 4 para cada pin.
● Pin de azufre: Este pin puede spawnear de manera muy poco común en las partidas
normales. Sirven para la meta-progresión del juego y el desbloqueo de personajes,
pero suelen obtenerse implícitamente al terminar un nivel. Está especificado en la
sección 4.4. Obtención
4.6 Tienda
Después de un enfrentamiento el jugador recibirá una cantidad de monedas variable
dependiendo de la dificultad de los enemigos, además si consigue los puntos necesarios
para superar un enfrentamiento y le sobran bolas en el rail estas añadirán un pequeño
bonus de monedas a la ganancia total.
Entre etapas de enfrentamiento de vez en cuando habrá una tienda, esta pantalla tendrá la
misma disposición que un enfrentamiento con los personajes arriba y la pista de bolos
abajo, la única diferencia es que en la tienda tendrás bolas de bolos normales infinitas, y en
vez de pines y obstáculos estarán los objetos a comprar con su precio, si el jugador desea
comprarlos deberá lanzarse la bola de bolos, tras esta impactar contra un artículo se frenará
terminando la tirada, en caso de tener las monedas, este artículo se comprará y la zona
donde estaba el objeto comprado pasará a ser una salida.
Se le ofrece una bola y un pin al azar los cuales cuestan 4 monedas aunque tienen un 15%
de estar rebajados a la mitad.
Además en la tienda tendrás la opción de renovar los objetos a la venta, para esto lanzamos
la bola contra la correspondiente máquina y se te consumirá una moneda, la máquina tiene
un pequeño porcentaje de no cambiar los objetos a pesar de consumir la moneda, esto se
puede repetir de nuevo hasta el tercer intento donde es asegurada la renovación.
Para terminar la sección de tienda basta con lanzar la bola a la salida.
Nota* Debido a influencia de una carta se ha añadido al personaje loro pirata como el
dependiente de la tienda, su función será estética y hará algún sonido y dirá alguna cosa
relacionada a las acciones del jugador.
➡️
*Prototipo visual de tienda sin el loro*
5 Mundo del juego
5.1 Personajes principales
Petra: La protagonista es una jugadora de bolos que fue pillada haciendo trampas en una
final de un torneo. De repente, la tierra se abrió debajo de sus pies y se la tragó, llevándola
al infierno. Como castigo por su imperdonable pecado, deberá participar en un torneo de
bolos en el que participa Lucifer. Aquí se enfrentará cara a cara con él donde conseguirá
una oportunidad para volver a la tierra y relanzar el tiro ganador.
Lucifer: El mismísimo demonio, un as de los bolos que siempre gana todos los torneos del
subsuelo, además de ser el único con el poder para transportar a Petra de vuelta a la
superficie.
5.2 Objetos
- Bolos: Siempre se encuentran al final de la pista y son los que el jugador debe
derribar cada lanzamiento. Hay 10 en total
- Monedas: Compone el dinero común en el juego que se usa en la tienda. Se
consiguen al final de cada nivel dependiendo del encuentro, de las bolas sobrantes y
de los efectos de los pines.
- Pines de azufre: Es nuestra moneda principal de meta-progresión en el juego para
desbloquear las compras permanentes desde el menú principal, o sea los
personajes. A diferencia de las monedas que se pierden al reiniciar una partida, los
pines permanecen entre partidas.
5.3 Niveles
La base del gameplay del juego, que es lanzar la bola por la pista y derribar el máximo
número de bolos al final de esta, permanece igual en todos los niveles de nuestro juego. Lo
único que varía son los obstáculos y el tamaño de la pista en sí. Estos son factores
realizados por los enemigos del juego. Cada enemigo tiene el poder de modificar levemente
la pista, en la mayoría de los enfrentamientos hay más de un enemigo acumulando los
efectos de cada uno sobre la pista.
Para superar un nivel se deberá alcanzar una puntuación suficiente antes de que se te
acaben las bolas.
La transición entre niveles será lineal.
5.4 Enemigos
Todos los enemigos ocupan una posición en pantalla específica la cual no se modifica.
Todos los efectos de pista son permanentes
Nombre Descripción
Diablillo de pacotilla pétreo Un enemigo que coloca dos casillas de piedras en
la pista.
Cubo de lava Una criatura que convive en el infierno la cual
crea casillas de magma en la pista.
Diablo marchito Conjura arena de almas que cubre secciones de
la pista
Espíritu de fuego Esta criatura invoca una barra de fuego giratoria
Diablo laura Este demonio beta crea una casilla de vacío de
aura en la pista
Gran espíritu de viento Aplica el efecto de pista de viento
Demonio de la caída Este gran demonio aplica el efecto de pista de
canales o gutters
El caracol inmortal (mini boss?) Aplica el efecto de pista de cambiar la forma y le
da a la pista una forma elíptica con la bola
partiendo desde el medio de la elipsis y los bolos
al final de esta.
Lucifer (Boss final) prototipo Este demonio será capaz de hacer que tengas
que derrotarlo tres veces, tendrás que alcanzar un
puntaje y cuando lo alcances recuperarás tus
bolas y la pista cambiará.
En cada fase la forma de la pista cambiará junto
al resto de enemigos del encuentro
La primera pista tendrá forma de serpiente
La segunda tendrá forma de estrella invertida de 5
puntas, la bola de una punta y tendrá que dar
toda la vuelta rebotando para llegar a la misma
punta por el otro lado
Y la última pista parecerá una pista normal solo
que los bolos no estarán y cuando lances la bola
y esta llegue al final de la pista la cámara
empezará a seguir a la bola mostrando que la
pista es exageradamente larga.
6 Interfaz
6.1 Cámara
La pantalla va a estar dividida horizontalmente en dos. En la parte superior podremos
observar a Petra y a los enemigos en una vista lateral 2D y en la parte de abajo la pista de
obstáculos y el derribe de los bolos desde una perspectiva top down. La parte de arriba y
algunos detalles de abajo actúan casi como una interfaz por lo que son estáticos y no se
mueven en ningún momento, pero la cámara que muestra la pista de bolos podrá tener un
mayor o menor zoom para que entre toda la pista, o en caso del jefe final seguir a la bola.
6.2 HUD
El jugador puede observar su puntaje y el puntaje al cual debe de llegar en la parte superior
central de la pantalla, estilizado al igual que en una bolera. En la parte inferior, en el sistema
de devolución de bolas de bolos, el jugador puede ver las siguientes 5 bolas que lanzará
además de ver el número de bolas restantes en el rail. Además de esto habrá una pantalla
de bolera abajo que normalmente no mostrará nada, pero si el jugador pone su cursor
encima de algo, este panel mostrará la info del objeto, el nombre y el efecto del enemigo,
las stats y el aura de una bola, lo mismo para los pines, y los obstáculos de la pista. (Quizás
podemos poner animaciones raras en la pantalla como las que hay en las boleras cuando
metes un pleno)
6.3 Menús
6.3.1 Menú principal
Pantalla que ve el jugador al entrar al juego o al volver a este desde otros menús.
Contiene lo siguiente:
- Botón para empezar una partida: empieza una partida completamente nueva
- Botón de ajustes: entra en el menú de ajustes
- Botón de tienda de personajes
6.3.2 Menú de pausa y ajustes
Pantalla que va a ver el jugador al pausar el juego, es semitransparente, por lo que el
estado del juego se sigue pudiendo ver en el fondo de este menú.
Está compuesto por tres botones:
- Reanudar: al pulsarlo la partida actual continúa.
- Menú: al pulsarlo el jugador vuelve al menú principal. Pierde el progreso de la
partida en la que se encuentra. Este botón, al ser pulsado, desplegará una ventana
emergente con un mensaje de confirmación, para evitar clicks accidentales de parte
del jugador.
Además de estos botones habrá sliders para audio y espacio para otros ajustes en caso de
ser necesarios.
- Slider de volumen principal: controla el volumen general del juego.
- Slider de volumen efectos: controla el volumen de todo menos la música.
- Slider de volumen música: controla el volumen de la música
6.3.3 Menú de derrota
Este menú aparece cuando el jugador no consigue llegar a la puntuación requerida para
superar el nivel. Consiste en un texto que pone “Has perdido! Estarás aquí por un largo rato,
así que vete buscando curro…”, una pantalla que muestra a la protagonista trabajando en
un Mc Infernalds y siendo miserable y un botón que te lleva al menú principal. Además, se
mostrarán los pines de azufre obtenidos durante la partida.
6.3.4 Menú de victoria
Aparece cuando el jugador se pasa el juego entero. Consiste en un texto que pone
“Felicidades! Olvídate de currar, el dinero del premio te da para media semana!”, una
pantalla que muestra a la protagonista con el trofeo y un botón que te lleva al menú
principal.
6.3.5 Menú de tienda de personajes
Este menú se encuentra en el menú principal. Aquí, el jugador haciendo uso de los pines de
azufre obtenidos en las partidas, puede ir desbloqueando personajes. Se mostrarán los
pines de azufre que tiene y los requeridos para desbloquear el personaje que seleccione.
7 Experiencia de Juego
Al iniciar el juego el jugador se encuentra con el menú principal desde el cual puede ir al
menú de opciones o iniciar la partida. En el momento donde el jugador presiona el botón de
“iniciar partida” comenzará el juego, con una pequeña introducción a nuestro protagonista y
un tutorial de la mecánica de lanzamiento. Aquí Petra es pillada haciendo trampas y es
enviada al infierno. Cae en una bolera e inmediatamente se tiene que enfrentar a
contrincantes en un torneo de bolos
Si el jugador consigue ganar el torneo, Lucifer nos envía de vuelta a la tierra en el momento
previo a hacer trampas, y el jugador deberá de volver a lanzar para ganar el torneo y quedar
primero (su equipo iba ganando de tantos puntos que era imposible perder, por lo que da
igual si el jugador no derriba ni un solo bolo)
8 Dinámicas
Queremos que el jugador vaya poco a poco mejorando en el minijuego de lanzar la pelota, y
poco a poco aprendiendo los efectos de los diferentes enemigos, bolas y pines.
No se espera que el jugador pueda completar el juego en su primer intento.
Se busca fomentar que el jugador tenga que adquirir tanto bolas como bolos y que si intenta
hacer una build solo pillando uno de los dos elementos tenga menos posibilidades de ganar.
Parte del espíritu del juego es causar muchos altos y bajos, para ello hay efectos negativos
hasta en las propias bolas pero sistemas como el de plenos y semiplenos permitirán dar la
vuelta a un encuentro rápidamente.
9 Estética y contenido
Necesitamos arte para el menú de inicio, la batalla, la tienda y el mapa, además de ello
necesitamos arte para la secuencia introductoria y el final del juego. Necesitamos el diseño
de los enemigos y el personaje, además de sprites para todos los elementos de la pista de
bolos.
Necesitamos música para el menú de inicio, quizás una canción para los niveles normales y
otra para los niveles de mini jefe, así como contra Lucifer.
Los sonidos son muy importantes, se necesitan sonidos muy satisfactorios para el
lanzamiento de bola, los choques y los pines cayendo, además de un sonido para los
puntos de tus pines siendo calculados y sumados.
10 Referencias
PEGLIN
Inspiración para el gameplay dual y lleno de
gimmicks.
BALL x PIT
Inspiración para efectos de bolas y
gimmicks.
BALATRO
Inspiración para el bucle de juego, la tienda
entre rondas y la meta-progresión
BOLOS
El juego es literalmente jugar a los bolos,
por lo que no es sorpresa que gran parte
esté basada en las reglas básicas del
deporte en la vida real
