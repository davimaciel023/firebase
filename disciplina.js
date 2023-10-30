var dataRef = new Firebase('https://escola-a300d-default-rtdb.firebaseio.com');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'disciplina') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    
                $("#tabela tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.CH}</td> +
    
                        <td>${value2.nome}</td> +
                        
                    </tr>`
    
                );
    
            }
        }


    }

});
