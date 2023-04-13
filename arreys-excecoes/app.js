const estoque = ['pão', 'arroz', 'feijão', 'macarrão', 'leite', 'açucar', 'queijo' ]

// progama para verificar se em ou nao p produto no estoque.
//digite sua lista logo apos o comando para rodar o programa.

try{
        const listaPedidos = process.argv.slice(2);

    const ProdutosEncontrados = estoque.filter(produto =>{
        return listaPedidos.find(pedido => pedido === produto);
    })
    ProdutosEncontrados.forEach(produto => console.log('Este produto nos temos: ',produto));

    const produtosEmFalta = listaPedidos.filter(pedido => {
        return !estoque.find(produto => produto === pedido)
    })
    produtosEmFalta.forEach(produtos => console.log(`Este produto esta em falta: ${produtos}`))

}catch(e){
    console.log('Não foi possivel comcluir a pesquisa...');
}
