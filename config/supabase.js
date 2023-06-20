import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://stlwfmkdstgfgydtavhv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0bHdmbWtkc3RnZmd5ZHRhdmh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3ODc2MzIsImV4cCI6MTk5OTM2MzYzMn0.GuRfDbQxL3SPfW6Emx49RlhPrUPRCRzlcvRTxRGkvu0';

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    localStorage: AsyncStorage,
});

export default supabase;
  