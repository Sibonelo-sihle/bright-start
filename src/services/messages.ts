import { adminMessages } from '../data/adminMockData';
import type { MessageStatus } from '../types';
let records=[...adminMessages];
export async function getMessages(){return [...records];}
export async function getMessage(id:string){return records.find(item=>item.id===id)??null;}
export async function updateMessageStatus(id:string,status:MessageStatus){records=records.map(item=>item.id===id?{...item,status}:item);return getMessage(id);}
