<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('educational_lessons', function (Blueprint $table) {
            $table->id();
            $table->string("title", 255);
            $table->string("content", 255);
            $table->unsignedBigInteger("module_id");
            $table->unsignedBigInteger("file_educational_program_id");
            $table->string("video_url");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('educational_lessons');
    }
};
