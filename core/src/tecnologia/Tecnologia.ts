export default interface Tecnologia {
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
    destaque: boolean;
}

// const t: Tecnologia = {
//     id: 1,
//     nome: 'TypeScript',
//     descricao: 'TypeScript é uma linguagem de tipagem estática e orientada a objetos.',
//     imagem: 'typescript.png',
//     destaque: true,
// }

// const t: Partial<Tecnologia> = {
//     id: 1,
//     nome: 'TypeScript',
//     descricao: 'TypeScript é uma linguagem de tipagem estática e orientada a objetos.',
//     imagem: 'typescript.png',
    
// }
// console.log(t)