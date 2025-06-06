module.exports = {
  apps: [
    {
      name: "cdl-api",
      script: "dist/server.js",   // caminho para o entry point JS
      cwd: __dirname,             // garante que o processo roda aqui dentro
      env_file: ".env",           // carrega variáveis sensíveis
      instances: 1,               // simples: 1 instância; altere se precisar cluster
      watch: false                // não queremos watch em produção
    }
  ]
};