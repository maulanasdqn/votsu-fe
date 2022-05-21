{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
  name="votsu-nix-node";
  buildInputs = [
    pkgs.nodejs-16_x
  ];
  shellHook = ''
    echo "Accessing the Beast ENV..."
    sleep 2
    echo "Wait...."
    sleep 2
    echo "Success Enter the Beast ENV"
  '';
}
