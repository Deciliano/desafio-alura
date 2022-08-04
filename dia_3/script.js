const area = prompt("Em qual área você pretende trabalhar: front-end ou back-end? Responda 1 para front-end e 2 para back-end");
if(area == 1){
	alert("Dentro dessa área, aconselha-se aprender React ou Vue");
}
if(area == 2){
	alert("Dentro dessa área, aconselha-se aprender C# e Java");
}

const seguir = prompt("Pretende se especializar na área escolhida ou seguir desinvolvimento fullstack? Responda 1 para especializar e 2 para fullstack");
if(seguir == 1){
	alert("Muito bom! É bom focar seus esofrços e dedicação a sua especialização!");
}
if(seguir == 2){
	alert("Não desista nas primeiras tentativas. Lembre-se sempre que será muito recompensador todo esforço que está fazendo no presente!!");
}

const tecnologia = prompt("Com quais tecnologias você pretende se especializar ou conhecer? Responda: 1 - React ou Vue. 2 - C# ou Java");
if(tecnologia == 1){
	alert("O React é uma biblioteca JavaScript criada pelo Facebook para o desenvolvimento de aplicações front-end. Ele é baseado em componentes, o que permite o reaproveitamento de código e facilita a manutenção. Já o Vue faz a utilização de um DOM virtual, o que faz com que seja extremamente performático na maioria das situações. Além disso, conta com uma arquitetura muito bem estruturada por meio da criação de componentes reusáveis.");
}
if(tecnologia == 2){
	alert("O C# (leia-se C-Sharp), é uma linguagem de programação orientada a objetos, que foi desenvolvida pela Microsoft e faz parte da plataforma . NET. Embora a linguagem C# tenha sido criada do zero, foi baseada na linguagem C++ e tem muitos elementos da linguagem Pascal e Java.  Enquanto Java é uma linguagem de programação e plataforma de computação liberada pela primeira vez pela Sun Microsystems em 1995. De um início humilde, ela evoluiu para uma grande participação no mundo digital dos dias atuais, oferecendo a plataforma confiável na qual muitos serviços e aplicativos são desenvolvidos.");
}