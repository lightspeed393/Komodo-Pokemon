export default {
  rpcHost: "", // 127.0.0.1 if you run the app & bakcground daemon are on the same host
  rpcPort: "", // 35593 for SPACE
  rpcUser: "", //your_rpc_user_name
  rpcPassword: "", //your_rpc_user_password
  rpcPubkey: "", //your pubkey, if no pubkey is provided, the pubkey used to launch the daemon is the default
  rpcRaddress: "" //your Raddress corresponding to the pubkey, will be caculated from your pubkey, so leave it blank
};
