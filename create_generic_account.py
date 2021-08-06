from eth_account import Account
import secrets
priv = secrets.token_hex(32)
##Generate a private key
private_key = "0x" + priv
print ("Private key: SAVE BUT DO NOT SHARE THIS:", private_key)
acct = Account.from_key(private_key)
print("Address:", acct.address)