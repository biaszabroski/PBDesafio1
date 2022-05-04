const users = [
	{
		login: 'brunohs',
		email: 'brunohs@pbtech.net.br',
		age: 18
	},
	{
		login: 'thainabcc',
		email: 'thaina.biudes@gmail.com',
		age: 25
	},
	{
		login: 'annecl',
		email: 'annecl@pbtech.net.br',
		age: 34
	},
    {
        login: 'willianfl',
        email: 'willianfl@pbtech.net.br',
        age: 30
    },
    {
        login: 'lucasplc',
        email: 'lucasplc@pbtech.net.br',
        age: 20
    }
];

// Função para somar a idade de todos os usuários da lista
function somarIdade() {
  const idades = users.map(user => user.age);
  
  console.log(idades);
  
  const soma = idades.reduce((previous, current) => previous + current, 0);
  
  console.log(soma);
}

somarIdade();

// Validar se o Login existe
function validaLogin(param) {
  const login = users.find(el => el.login === param);
  
  if (login === undefined) {
    console.log('Não encontramos esse usuário');
  } else {
    console.log(`O usuário ${login.login} foi encontrado.`) 
  }
}

validaLogin('annecl');

// Mostrar todos os e-mails no console.log
function mostrarEmails() {
  const lista = users.map(el => el.email);
  
  console.log(`A lista de e-mail foi ${lista}`);
}

mostrarEmails();

// Contar quantos usuários possuem e-mail da empresa pbtech.net.br
function contarEmails() {
  const emailsPbTech = users.filter(user => user.email.endsWith('@pbtech.net.br'));
  
  console.log(emailsPbTech);
  
  console.log(`A soma dos e-mails pertencentes ao pbtech.net.br foi de ${emailsPbTech.length}`)
}

contarEmails();


