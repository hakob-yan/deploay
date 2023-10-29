import { NextResponse } from "next/server";
import { store } from "../../redux/redux/store";
import { setPartner } from "../../redux/redux/features/partner/partnerSlice";

export async function POST(req) {
  console.log("mtav");
  const data = await req.json();
  store.dispatch(setPartner(data.name));
  return NextResponse.json({});
}
