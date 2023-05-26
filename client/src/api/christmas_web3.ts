export type ChristmasProgram = {
  version: "0.1.0";
  name: "christmas_web3";
  instructions: [
    {
      name: "sayHello";
      accounts: [];
      args: [];
    },
    {
      name: "addToPool";
      accounts: [
        {
          name: "userAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "christmasAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userUsdcAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "christmasUsdcAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "mintTokenToMarketplace";
      accounts: [
        {
          name: "mintAccount";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marketplaceTokenPda";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "numTokens";
          type: "u64";
        },
        {
          name: "bump";
          type: "u8";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "UserAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "isInitialized";
            type: "bool";
          },
          {
            name: "totalAmountContributed";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "ChristmasAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "isInitialized";
            type: "bool";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "totalAmountContributed";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "MarketPlaceTokenPDA";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "description";
            type: "string";
          }
        ];
      };
    }
  ];
  metadata: {
    address: "5ZohsZtvVnjLy7TZDuujXneojE8dq27Y4mrsq3e8eKTZ";
  };
};
