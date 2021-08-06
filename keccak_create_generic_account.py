from secrets import token_bytes
from coincurve import PublicKey
from sha3 import keccak_256

private_key = keccak_256(token_bytes(32)).digest()
public_key = PublicKey.from_valid_secret(private_key).format(compressed=False)[1:]
addr = keccak_256(public_key).digest()[-20:]

print('private_key:', private_key.hex())
print('eth addr: 0x' + addr.hex())

### Output ###
# private_key: 7bf19806aa6d5b31d7b7ea9e833c202e51ff8ee6311df6a036f0261f216f09ef
# eth addr: 0x3db763bbbb1ac900eb2eb8b106218f85f9f64a13