# rec-agrinho-2025

# Corrida de Emojis Agros
Este é um jogo feito o p5.js, onde emojis correm até a linha de chegada. Cada jogador usa uma tecla do teclado para fazer seu emoji andar. O jogo tem vídeo e música de fundo para deixar tudo mais dinamico.

# Como funciona
Cada emoji é um jogador e é controlado por uma tecla:

a = 🧔🏻‍♂️

s = 🍊

d = ☕

f = 🥕

g = 🌽

Ao soltar a tecla, o emoji correspondente anda pra frente.

Quem chegar primeiro na linha de chegada vence.

Quando um emoji vence, o jogo mostra o emoji ganhador e para.

O fundo do jogo é um vídeo, e há uma música tocando o tempo todo.

# Explicação dos codigos
preload() carrega o vídeo e a música antes do jogo começar.

setup() cria a tela, inicia a música e o vídeo em loop.

draw() roda várias vezes por segundo e:

desenha o vídeo no fundo,

mostra os emojis dos jogadores,

desenha a linha de chegada,

verifica se alguém venceu.

keyReleased() detecta quando o jogador solta a tecla e faz o emoji andar.

verificaVencedor() confere se algum emoji passou da linha de chegada e para o jogo.

ativaJogo() escurece a tela se o jogador sair da aba do navegador.
