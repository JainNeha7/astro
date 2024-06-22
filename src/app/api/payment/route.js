import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  const { txnid, phone, amount, productinfo, firstname, email } = await request.json();
  
  const merchantKey = "buKFPp";
  const salt = "UAnjoalqHOJrBtKjs1zDfaoOPUsyvBQu";

  const hashString = `${merchantKey}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;

  const hash = crypto.createHash('sha512').update(hashString).digest('hex').toLowerCase();

  return NextResponse.json({ hash, merchantKey });
}

