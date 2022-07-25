{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
  name="votsu-nix-node";
  buildInputs = [
    pkgs.nodejs-16_x
    pkgs.nodePackages.yarn
  ];
  shellHook = ''
    echo "Accessing the Beast ENV..."
    sleep 1
    echo "Wait...."
    sleep 1
    echo "Success Enter the Beast ENV"
    sleep 1
    echo "Wait...."
    sleep 1
    echo "Setting up dotenv"
    sleep 1
    echo "API_URL=https://api-votsu.herokuapp.com/" > .env
    zsh
  '';
}
