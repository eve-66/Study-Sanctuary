-- CreateTable
CREATE TABLE "study_sessions" (
    "session_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_time" TIMESTAMP(3),
    "total_session_duration" INTEGER,
    "effective_study_duration" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "study_sessions_pkey" PRIMARY KEY ("session_id")
);

-- CreateTable
CREATE TABLE "study_segments" (
    "segment_id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "segment_type" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_time" TIMESTAMP(3),
    "duration_seconds" INTEGER,
    "order_in_session" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "study_segments_pkey" PRIMARY KEY ("segment_id")
);

-- AddForeignKey
ALTER TABLE "study_segments" ADD CONSTRAINT "study_segments_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "study_sessions"("session_id") ON DELETE RESTRICT ON UPDATE CASCADE;
