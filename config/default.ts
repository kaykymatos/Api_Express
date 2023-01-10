const dbUser=process.env.DB_USER;
  const dbPass=process.env.DB_PASS;
export default {
  port:3000,
  dbUri:`mongodb://${dbUser}:${dbPass}@ac-usps8vu-shard-00-00.3wh9fis.mongodb.net:27017,ac-usps8vu-shard-00-01.3wh9fis.mongodb.net:27017,ac-usps8vu-shard-00-02.3wh9fis.mongodb.net:27017/?ssl=true&replicaSet=atlas-jj2cxu-shard-0&authSource=admin&retryWrites=true&w=majority`,
  env:"development"
};  
