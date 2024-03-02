import { getServerSession } from "next-auth";
import prisma from "../../../prisma/index.js";
import { authOptions } from "../../../utils/authoptions.js";

export async function POST(req) {
  const jsonbody = await req.json();
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json('Unauthorized');
  }

  const { title, description, status, assignedUser, date } = jsonbody;
  try {
    const taskDoc = await prisma.task.create({
      data: {
        title: title,
        description: description,
        status: status,
        assignedUser: assignedUser,
        date: date,
      },
    });
    console.log(taskDoc);
    return Response.json(taskDoc);
  } catch (err) {
    console.log(err);
  }
}

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json('Unauthorized');
    }
    const searchParams = req.nextUrl.searchParams;
    const { take } = searchParams.get("take");
    const { cursor } = searchParams.get("cursor");
   
 
    const queryOptions = {
        take: parseInt(take || 10),
        cursor: cursor ? JSON.parse(cursor) : undefined,
        orderBy: {
            createdAt: "asc",
        },
    };
    const taskDoc = await prisma.task.findMany(queryOptions);
    const nextCursor =
      taskDoc.length > 0 ? taskDoc[taskDoc.length - 1].id : null;
    return Response.json({ taskDoc, nextCursor });
  } catch (err) {
    console.log(err);
  }
}


export async function DELETE(req) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return Response.json('Unauthorized');
    }
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

    console.log('id',id)
    try {
        const taskDoc = await prisma.task.delete({
        where: {
            id: id,
        },
        });
        return Response.json(taskDoc);
    } catch (err) {
        console.log(err);
    }
}


export async function PUT(req){
    const session = await getServerSession(authOptions);
    if (!session) {
        return Response.json('Unauthorized');
    }
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    const jsonbody = await req.json();
    const { title, description, status, assignedUser, date } = jsonbody;
    try {
        const taskDoc = await prisma.task.update({
            where: {
                id: id,
            },
            data: {
                title: title,
                description: description,
                status: status,
                assignedUser: assignedUser,
                date: date,
            },
        });
        return Response.json(taskDoc);
    } catch (err) {
        console.log(err);
    }
}