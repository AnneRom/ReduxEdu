import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rpnzuywbkdvbbmawcblo.supabase.co";
const supabaseKey = "sb_publishable_dqASUjQCjZNZCFsrOuzpVA_3xKENu_-";

export const supabase = createClient(supabaseUrl, supabaseKey);