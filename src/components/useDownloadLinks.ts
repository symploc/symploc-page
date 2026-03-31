"use client";

import { useEffect, useState, useMemo } from "react";

export type OS = "windows" | "mac" | "linux";

interface VersionManifest {
  latestVersion: string;
  minVersion: string;
  forceUpdate: boolean;
  updateMessage: string;
  downloadUrl: {
    win: string;
    mac: string;
    macArm64: string;
    linux: string;
  };
}

const MANIFEST_URL = "https://downloads.symploc.com/releases/version-manifest.json";

const fallback: VersionManifest = {
  latestVersion: "",
  minVersion: "",
  forceUpdate: false,
  updateMessage: "",
  downloadUrl: {
    win: "#",
    mac: "#",
    macArm64: "#",
    linux: "#",
  },
};

let cached: VersionManifest | null = null;
let inflight: Promise<VersionManifest> | null = null;

function fetchManifest(): Promise<VersionManifest> {
  if (!inflight) {
    inflight = fetch(MANIFEST_URL)
      .then((r) => r.json())
      .then((data: VersionManifest) => { cached = data; return data; })
      .catch(() => fallback);
  }
  return inflight;
}

export function useDownloadLinks() {
  const [manifest, setManifest] = useState<VersionManifest>(cached ?? fallback);

  useEffect(() => {
    if (cached) { setManifest(cached); return; }
    fetchManifest().then(setManifest);
  }, []);

  const [os, setOs] = useState<OS>("windows");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("mac")) setOs("mac");
    else if (ua.includes("linux")) setOs("linux");
  }, []);

  const links = useMemo(() => ({
    win: manifest.downloadUrl.win,
    mac: manifest.downloadUrl.mac,
    macArm64: manifest.downloadUrl.macArm64,
    linux: manifest.downloadUrl.linux,
    version: manifest.latestVersion,
    os,
    primary: os === "mac" ? manifest.downloadUrl.mac : os === "linux" ? manifest.downloadUrl.linux : manifest.downloadUrl.win,
  }), [manifest, os]);

  return links;
}
