function acceptGamesById(gameIds) {
    gameIds.forEach(gameId => {
        // Seleciona o elemento do jogo com o ID especificado
        const gameElement = document.querySelector(`#app-ctn-${gameId}`);

        if (gameElement) {
            // Encontra o botão "Aceitar" correspondente
            const acceptButton = gameElement.querySelector('.btnv6_green_white_innerfade.btn_small');

            if (acceptButton) {
                acceptButton.click();
                console.log(`Jogo com ID ${gameId} aceito.`);
            } else {
                console.log(`Botão de aceitação não encontrado para o jogo com ID ${gameId}.`);
            }
        } else {
            console.log(`Jogo com ID ${gameId} não encontrado na lista.`);
        }
    });
}

// ID do jogo que você quer aceitar
const gameIdsToAccept = [''];

// Executa a função
acceptGamesById(gameIdsToAccept);
