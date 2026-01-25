-- Upvibers Waitlist Table Setup
-- Run this SQL in your Supabase SQL Editor

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for public waitlist signup)
CREATE POLICY "Allow public insert" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all entries
CREATE POLICY "Allow authenticated read" ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Optional: Create a view to see waitlist count (for admin dashboard)
CREATE OR REPLACE VIEW waitlist_stats AS
SELECT 
  COUNT(*) as total_signups,
  COUNT(CASE WHEN created_at >= NOW() - INTERVAL '24 hours' THEN 1 END) as signups_last_24h,
  COUNT(CASE WHEN created_at >= NOW() - INTERVAL '7 days' THEN 1 END) as signups_last_week,
  MIN(created_at) as first_signup,
  MAX(created_at) as latest_signup
FROM waitlist;

-- Grant access to the view
GRANT SELECT ON waitlist_stats TO authenticated;
