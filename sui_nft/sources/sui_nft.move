module sui_nft::sui_nft {
    use std::string::String;

    public struct NFT has key, store {
        id: UID,
        name: String,
        description: String,
        image_uri: String,
    }

    public entry fun mint(name: String, description: String, image_uri: String, ctx: &mut TxContext) {
        let nft = NFT {
            id: object::new(ctx),
            name: name,
            description: description,
            image_uri: image_uri,
        };
        let sender: address = tx_context::sender(ctx);
        transfer::public_transfer(nft, sender);
    }

    public entry fun transfer_nft(nft: NFT, recipient: address) {
        transfer::public_transfer(nft, recipient);
    }
}
