interface SchemaProps {
  data: any;
}

export default function Schema({ data }: SchemaProps) {
  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
}
