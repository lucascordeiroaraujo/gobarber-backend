# Recuperação de senha

**Requsitos funcionais**

- O usuário deve poder recuperar sua senha informando o seu e-mail;

- O usuário deve receber um e-mail com instruções de recuperação de senha;

- O usuário deve poder resetar sua senha;

**Requsitos não funcionais**

- Utilizar Mailtrap para testar envios em ambiente de DEV;

- Utilizar Amazon SES para envios em produção;

- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de negócios**

- O link enviado por e-mail para resetar a senha deve expirar em 2H;

- U usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização de perfil

**Requsitos funcionais**

- O usuário deve poder atualizar seu nome, email e senha;

**Requsitos não funcionais**

- //

**Regras de negócios**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;

- Para atualizar sua senha, o usuário deve informar a senha antiga;

- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**Requsitos funcionais**

- O usuário deve poder listar seus agendamentos de um dia especifico;

- O prestador deve receber um notificação sempre que houver um novo agendamento;

- O prestador deve poder visualizar as notificações não lidas;

**Requsitos não funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;

- As notificações do prestador devem ser armazenadas no MongoDB;

- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io

**Regras de negócios**

- A notificação deve ter um status de lida / não lida para que o prestador possa controlar;

# Agendamento de serviços

**Requsitos funcionais**

- O usuário deve poder listar todos os prestadores de serviço cadastrado;

- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;

- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;

- O usuário deve poder realizar um novo agendamento com um prestador;

**Requsitos não funcionais**

- A listagem de prestadores deve ser armazenado em cache;

**Regras de negócios**

- Cada agendamento deve durar 1h exatamente;

- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);

- O usuário não pode agendar em um horário já ocupado;

- O usuário não pode agendar em um horário que já passou;

- O usuário não pode agendar serviços consigo mesmo;
