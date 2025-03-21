import { Controller, Get } from "@nestjs/common";
import { Tecnologia } from "@core";
import { TecnologiaPrisma } from "./tecnologia.prisma";

@Controller("tecnologias")
export class TecnologiaController {
	constructor(private readonly repo: TecnologiaPrisma) {}
	@Get()
	async obterTodas(): Promise<Tecnologia[]> {
		return this.repo.obterTodas();

		// return [
		// 	{
		// 		id: 1,
		// 		nome: "Angular",
		// 		descricao:
		// 			"Angular é um framework JavaScript de código aberto e muitas vezes utilizado para desenvolver aplicações web.",
		// 		imagem: "https://angular.io/assets/images/logos/angular/angular.svg",
		// 		destaque: true,
		// 	},
		// ];
		// return ["Agular", "React", "Vue.js"];
	}

	@Get("destaques")
	async obterDestaques(): Promise<Tecnologia[]> {
		return this.repo.obterDestaques();
	}
}
