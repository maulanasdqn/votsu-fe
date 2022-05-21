{ pkgs ? import <nixpkgs> { system = "x86_64-linux";}
}:
let 
  nginxMinimal = import ./nginx-minimal.nix { inherit pkgs; };
in
pkgs.dockerTools.buildLayeredImage {
  name = "nix-nginx-minimal";
  tag = "latest";
  contents = [ nginxMinimal ];
}
