import { NextResponse } from 'next/server'

// In-memory storage (resets on deployment, but works for live tracking)
let visitorData = {
  totalVisits: 0,
  uniqueVisitors: new Set<string>(),
  dailyVisits: {} as Record<string, number>,
  weeklyVisits: {} as Record<string, number>,
  lastReset: new Date().toISOString().split('T')[0]
}

export async function GET() {
  const today = new Date().toISOString().split('T')[0]
  
  // Reset daily counter if new day
  if (visitorData.lastReset !== today) {
    visitorData.dailyVisits = {}
    visitorData.lastReset = today
  }

  return NextResponse.json({
    todayVisitors: visitorData.dailyVisits[today] || 0,
    totalVisitors: visitorData.totalVisits,
    uniqueVisitors: visitorData.uniqueVisitors.size,
  })
}

export async function POST(request: Request) {
  try {
    const { sessionId } = await request.json()
    const today = new Date().toISOString().split('T')[0]
    
    // Increment total visits
    visitorData.totalVisits++
    
    // Track unique visitor
    if (sessionId) {
      visitorData.uniqueVisitors.add(sessionId)
    }
    
    // Increment daily visits
    visitorData.dailyVisits[today] = (visitorData.dailyVisits[today] || 0) + 1
    
    return NextResponse.json({
      success: true,
      todayVisitors: visitorData.dailyVisits[today],
      totalVisitors: visitorData.totalVisits,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 })
  }
}

