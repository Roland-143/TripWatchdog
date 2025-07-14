# TripWatchdog
# Ensuring Travellers Make it Home

> A lightweight safety‑first companion app that keeps an eye on your journey and alerts your trusted contacts if you don’t check‑in as planned.

---

## Overview

TripWatchdog lets outdoor enthusiasts, solo commuters, and adventure travellers share detailed trip plans so friends or family can verify they made it home.
If a scheduled check‑in is missed, the app escalates through configurable alerts—from gentle nudges to full SOS messages—complete with last‑known GPS data.

## Key Features

* **Trip Planning**: Start/finish times, route GPX/KML upload, risk level selection.
* **Smart Check‑ins**: Automatic or manual check‑ins with push + SMS fallback.
* **Escalation Ladder**: Customisable alerts (notify contacts → share live location → trigger SOS).
* **Privacy‑by‑Default**: Location shared *only* when escalation rules require it.
* **Offline‑first**: Stores logs locally and syncs when connectivity returns.

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Roland-143/TripWatchdog.git
cd TripWatchdog

# Install dependencies (Yarn preferred)
yarn install

# Run the app (Expo example)
yarn expo start
```

## Tech Stack

* React Native (TypeScript)
* Redux Toolkit for state management
* Expo Notifications & Background Location
* Firebase (Auth + Firestore)

## License

This project is licensed under the **MIT License** – see the `LICENSE` file for details.

## Contact

* Project Lead: Nick - Contact: nsteltzner@gmail.com 
* Issues: please open a GitHub issue with a clear description of the problem.

---

*Ensuring every traveller makes it home :)
