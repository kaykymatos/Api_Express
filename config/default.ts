const dbUser=process.env.DB_USER;
  const dbPass=process.env.DB_PASS;
export default {
  port:3000,
  dbUri:`mongodb://${dbUser}:${dbPass}@ac-uu5wh5n-shard-00-00.fgrgpn9.mongodb.net:27017,ac-uu5wh5n-shard-00-01.fgrgpn9.mongodb.net:27017,ac-uu5wh5n-shard-00-02.fgrgpn9.mongodb.net:27017/?ssl=true&replicaSet=atlas-9lxstf-shard-0&authSource=admin&retryWrites=true&w=majority`
};
