{ pkgs ? import <nixpkgs> { }
, pkgsLinux ? import <nixpkgs> { system = "x86_64-linux"; }
}:

pkgs.dockerTools.buildImage {
  name = "votsu-fe";
  config = {
    Cmd = [ "${pkgsLinux.hello}/bin/hello" ];
  };
}
