{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
  name="votsu-nix-node";
  buildInputs = [
    pkgs.nodejs-16_x
  ];
  shellHook = ''
    zsh
  '';
}
