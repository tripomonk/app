/* ============================================================
   Tripomonk backend config
   ------------------------------------------------------------
   Leave BLANK to use the app's built-in demo data.
   To connect your live Supabase backend (so editing data in the
   Supabase dashboard updates the app), paste your project URL and
   the ANON (public) key below. See BACKEND-SETUP.md.

   IMPORTANT: only use the *anon* (public) key here — never the
   service_role/secret key. The anon key is safe in front-end code.
   ============================================================ */
window.TMK_CONFIG = {
  SUPABASE_URL: "https://pdenkohcsjnagcfvwbfi.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_nC4q3VEA4nfWQaZeBSoZsQ__e5OC-X2",
  RAZORPAY_KEY_ID: "rzp_test_T4fTTBNhnhcF6R",  // test key — swap for live key when ready

  /* Native app store links. Leave blank while there is no native app —
     the install bar then uses the browser's own PWA install prompt.
     Fill either one in and that platform's bar links to the store instead. */
  PLAY_STORE_URL: "",
  APP_STORE_URL: ""
};
