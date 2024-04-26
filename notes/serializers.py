from rest_framework import serializers

from notes.models import Note

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

    def validate(self, data):
        if not data['title'].strip():
            raise serializers.ValidationError("Title Should not be empty")
        if not data['content'].strip():
            raise serializers.ValidationError("Content Should not be empty")
        return data